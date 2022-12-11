import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

import { QuizService } from 'src/app/services/quiz.service';

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

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private _serv: QuizService
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

    // this.correctAnswer = 5;
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
    this.text_3 = this.correctAnswerPorCentual.toString() + '%';
  }

  ngOnInit() {}

  nextPage() {
    this._serv.deleteFields();
    this.navCtrl.navigateRoot(`/simulaciones/0`, {
      animated: true,
      animationDirection: 'forward',
    });
  }
}
