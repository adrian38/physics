import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  NavController,
  Platform,
} from '@ionic/angular';

import { QuizService } from 'src/app/services/quiz.service';
import { ApiService } from 'src/app/services/backend.service'; //API

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.page.html',
  styleUrls: ['./quiz-result.page.scss'],
})
export class QuizResultPage implements OnInit {
  quiz: any;
  result: any[] = [];
  correctAnswer: number = 0;
  temp: number = 0;
  correctAnswerPorCentual: number = 0;
  text: string = '';
  text_2: string = '';
  text_3: string = '';

  total = 0;
  colorScheme = [{ name: 'Correctas', value: '#63B5F6' }];

  correctAnswerGraph = [];
  loading: HTMLIonLoadingElement = null; ///API

  constructor(
    public navCtrl: NavController,
    // private platform: Platform,
    private _serv: QuizService,
    public alertController: AlertController, ///API
    public loadingController: LoadingController, ///API
    private _apiService: ApiService ///API
  ) {
    this.quiz = this._serv.getQuiz();
    // this.total = 7;

    this.total = this.quiz.answer.length;

    this.result.push(this._serv.getQuestion1());
    this.result.push(this._serv.getQuestion2());
    this.result.push(this._serv.getQuestion3());
    this.result.push(this._serv.getQuestion4());
    this.result.push(this._serv.getQuestion5());
    this.result.push(this._serv.getQuestion6());
    this.result.push(this._serv.getQuestion7());

    for (let [index, element] of this.quiz.answer.entries()) {
      if (element === this.result[index]) {
        this.correctAnswer++;
      }
    }

    // this.correctAnswer = 7;

    this.correctAnswerGraph = [
      { name: 'Correctas', value: this.correctAnswer },
    ];

    this.temp = (this.correctAnswer / this.quiz.answer.length) * 100;
    this.correctAnswerPorCentual = Math.round(this.temp);

    // this.correctAnswerPorCentual = 100;

    if (this.correctAnswerPorCentual === 100) {
      this.text = 'EXCELENTE';
      this.text_2 =
        'Felicidades, haz contestado correctamente todas las preguntas. ¡No pierdas el ritmo y continua con el buen trabajo!';
      // console.log('************* text *************');
      // console.log(this.text);
    } else if (
      this.correctAnswerPorCentual >= 50 &&
      this.correctAnswerPorCentual < 100
    ) {
      this.text = 'BIEN';
      this.text_2 =
        'Tienes dominio sobre el tema, pero hay espacio para mejorar. Esfuérzate un poco más, ¡sé que puedes lograrlo!';

      // console.log('************* text *************');
      // console.log(this.text);
    } else {
      this.text = 'REGULAR';
      this.text_2 =
        'Tienes pocos conocimientos sobre el tema. Debes dedicarle más tiempo y esfuerzo. ¡Vamos, no te rindas!';

      console.log('************* text *************');
      console.log(this.text);
    }
    // this.text_3 = '100%';
    // this.text_3 = this.correctAnswerPorCentual.toString() + '%';
  }

  ngOnInit() {}

  ///API

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
      if (await this._apiService.saveExamResults(body)) {
        console.log('************* navigating home *************');
        this.navCtrl.navigateRoot('/simulaciones/0', {
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

  nextPage() {
    this._serv.deleteFields();
    console.log('');
    console.log('----------------boton continuar----------');
    ///lamada a la api
    let body = {
      name: 'Electromagnetismo_1',
      score: this.correctAnswerPorCentual,
      type: 'quiz',
      status: false,
    };
    console.log('body', body);
    this.saveResult(body);
  }
}
