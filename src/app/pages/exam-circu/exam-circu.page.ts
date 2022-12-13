import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  ModalController,
  NavController,
  Platform,
} from '@ionic/angular';
import { ApiService } from 'src/app/services/backend.service';
import { ImagenmodalPage } from '../imagenmodal/imagenmodal.page';

@Component({
  selector: 'app-exam-circu',
  templateUrl: './exam-circu.page.html',
  styleUrls: ['./exam-circu.page.scss'],
})
export class ExamCircuPage implements OnInit {
  justify: any[] = [
    { answer: 0, justify: '' },
    { answer: 0, justify: '' },
    { answer: 0, justify: '' },
    { answer: 0, justify: '' },
  ];

  answers: any[] = [];
  loading: HTMLIonLoadingElement = null; ///API

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController, ///API
    public loadingController: LoadingController, ///API
    private _apiService: ApiService, ///API
    private modalCtrl: ModalController,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/autoexamen', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }

  imageClick(imagen: any) {
    this.modalCtrl
      .create({
        component: ImagenmodalPage,
        componentProps: {
          imagen: imagen,
        },
      })
      .then((modal) => modal.present());
  }

  async showLoading(message: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: message,
    });

    return this.loading.present();
  }

  async saveResult(body: any) {
    this.showLoading('Guardando resultados');

    try {
      const testId = await this._apiService.saveExamResults(body);

      console.log('************* testId *************');
      console.log(testId);

      if (testId) {
        for (const [index, element] of this.justify.entries()) {
          this.answers.push({
            id_exam: testId,
            question_number: index,
            justify: element.justify,
            answer: parseInt(element.answer),
          });
        }
        this.saveScore();
      } else {
        this.showAlert();
      }
    } catch (err) {
      this.showAlert();
      console.log('============= err =============');
      console.log(err);
    }
  }

  async saveScore() {
    try {
      if (await this._apiService.saveScoreResults(this.answers)) {
        if (this.loading) {
          this.loading.dismiss();
        }

        this.navCtrl.navigateRoot('/autoexamen', {
          animated: true,
          animationDirection: 'forward',
        });
      } else {
        this.showAlert();
      }
    } catch (err) {
      this.showAlert();
      console.log('============= err =============');
      console.log(err);
    }
  }

  async showAlert() {
    if (this.loading) {
      this.loading.dismiss();
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error conectividad',
      message: 'Si el problema persiste contactar con la administración',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          //handler: () => {},
        },
        {
          text: 'Continuar',
          handler: () => {
            this.navCtrl.navigateRoot('/autoexamen', {
              animated: true,
              animationDirection: 'forward',
            });
          },
        },
      ],
    });

    await alert.present();
  }

  nextPage() {
    let body = {
      name: 'CIRCUITO',
      type: 'examen',
      status: true,
    };

    this.saveResult(body);
  }
}
