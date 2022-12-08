import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-elect12',
  templateUrl: './quiz-elect12.page.html',
  styleUrls: ['./quiz-elect12.page.scss'],
})
export class QuizElect12Page implements OnInit {
  question2: string = '0';
  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private _serv: QuizService
  ) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('quiz-elect1', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }
  ngOnDestroy() {
    location.reload();
  }

  ngAfterViewInit() {
    if (parseInt(this._serv.getQuestion2())) {
      setTimeout(() => {
        document.getElementById(this._serv.getQuestion2()).className =
          'jello-horizontal';
      }, 400);
    }
  }

  nextPage() {
    this.navCtrl.navigateRoot(`/quiz-elect13`, {
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
        this._serv.setQuestion2('1');
        break;
      case 2:
        document.getElementById('2').className = 'jello-horizontal';
        document.getElementById('1').className = 'quiz-img-row';
        document.getElementById('3').className = 'quiz-img-row';
        this._serv.setQuestion2('2');
        break;
      case 3:
        document.getElementById('3').className = 'jello-horizontal';
        document.getElementById('1').className = 'quiz-img-row';
        document.getElementById('2').className = 'quiz-img-row';
        this._serv.setQuestion2('3');
        break;
    }
  }
}
