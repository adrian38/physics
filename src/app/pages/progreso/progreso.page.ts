import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/services/backend.service';
import data from '../../utils/data-user.json';


@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.page.html',
  styleUrls: ['./progreso.page.scss'],
})
export class ProgresoPage implements OnInit {
  user:any;
  options: any[]=[];
  data: any;
  loading: HTMLIonLoadingElement = null; ///API
  temp: any[] = [];
  temp_notes: any[] = [];
  exam_name:any[]=[];


  constructor(public navCtrl: NavController, 
    private platform: Platform,
    public alertController: AlertController, ///API
    public loadingController: LoadingController, ///API
    private _apiService: ApiService ///API
    ) {
    

      
    
    
  }

  async showLoading(message: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: message,
    });

    return this.loading.present();
  }

  async getResult() {
    this.showLoading('Cargando resultados');

    try {
      this.options = await  this._apiService.getExamResults()
      for (let element of this.options) {
        this.temp.push(element.intents_number.toString());
        this.temp_notes.push(element.score);
        this.exam_name.push(element.name);
      }
  
      this.data = {
        labels: this.temp,
        datasets: [
          {
            label: 'Intentos',
            data: this.temp_notes,
          },
        ],
      };
      console.log(this.options,"info")
      
      
    } catch (err) {
      this.showAlert();
      console.log('============= err =============');
      console.log(err);
    }
    this.loading.dismiss();
  }

  async showAlert() {
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
            this.navCtrl.navigateRoot('/simulaciones/0', {
              animated: true,
              animationDirection: 'forward',
            });
          },
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {
    this.user=this._apiService.getUser();

     this.getResult();
    
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }
}
