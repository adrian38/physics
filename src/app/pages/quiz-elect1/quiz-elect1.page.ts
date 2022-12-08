import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-elect1',
  templateUrl: './quiz-elect1.page.html',
  styleUrls: ['./quiz-elect1.page.scss'],
})
export class QuizElect1Page implements OnInit {
  question1: string = '0';
  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    public alertController: AlertController,
    private _serv: QuizService
  ) {}

  ngOnInit() {
    this._serv.setQuiz({
      name: 'elect1',
      count: 7,
      answer: ['2', '2', '3', '5', '4', '3', '4'],
    });
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.showExitAlert();
    });
  }

  ngAfterViewInit() {
    if (parseInt(this._serv.getQuestion1())) {
      setTimeout(() => {
        document.getElementById(this._serv.getQuestion1()).className =
          'jello-horizontal';
      }, 400);
    }
  }

  showExitAlert() {
    this.alertController
      .create({
        header: 'Alerta',
        message: 'Desea salir del Quiz?',
        backdropDismiss: false,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {},
          },
          {
            text: 'Salir',
            handler: () => {
              this._serv.deleteFields();
              this.navCtrl.navigateRoot('/simulaciones/0', {
                animated: true,
                animationDirection: 'back',
              });
            },
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }

  nextPage() {
    this.navCtrl.navigateRoot(`/quiz-elect12`, {
      animated: true,
      animationDirection: 'forward',
    });
  }

  response(id: number) {
    switch (id) {
      case 1:
        document.getElementById('1').className = 'jello-horizontal';
        document.getElementById('2').className = 'quiz-img-row';
        document.getElementById('3').className = 'quiz-img-row';
        this._serv.setQuestion1('1');
        break;
      case 2:
        document.getElementById('2').className = 'jello-horizontal';
        document.getElementById('1').className = 'quiz-img-row';
        document.getElementById('3').className = 'quiz-img-row';
        this._serv.setQuestion1('2');
        break;
      case 3:
        document.getElementById('3').className = 'jello-horizontal';
        document.getElementById('1').className = 'quiz-img-row';
        document.getElementById('2').className = 'quiz-img-row';
        this._serv.setQuestion1('3');
        break;
    }
  }
}
