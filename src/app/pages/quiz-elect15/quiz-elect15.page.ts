import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-elect15',
  templateUrl: './quiz-elect15.page.html',
  styleUrls: ['./quiz-elect15.page.scss'],
})
export class QuizElect15Page implements OnInit {
  question7: string = '0';

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private _serv: QuizService
  ) {}

  ngOnInit() {
    this.question7 = this._serv.getQuestion7();

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('quiz-elect14', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }

  setAnswer() {
    console.log('************* radio button *************');
    console.log();
    this._serv.setQuestion7(this.question7);
  }

  nextPage() {
    this.navCtrl.navigateRoot(`/lottie`, {
      animated: true,
      animationDirection: 'forward',
    });
  }
}
