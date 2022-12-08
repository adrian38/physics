import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-elect14',
  templateUrl: './quiz-elect14.page.html',
  styleUrls: ['./quiz-elect14.page.scss'],
})
export class QuizElect14Page implements OnInit {
  question5: string = '0';
  question6: string = '0';

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private _serv: QuizService
  ) {}

  ngOnInit() {
    this.question5 = this._serv.getQuestion5();
    this.question6 = this._serv.getQuestion6();

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('quiz-elect13', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }

  nextPage() {
    this._serv.setQuestion5(this.question5);
    this._serv.setQuestion6(this.question6);
    this.navCtrl.navigateRoot(`/quiz-elect15`, {
      animated: true,
      animationDirection: 'forward',
    });
  }
}
