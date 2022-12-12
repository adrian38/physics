import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-elect13',
  templateUrl: './quiz-elect13.page.html',
  styleUrls: ['./quiz-elect13.page.scss'],
})
export class QuizElect13Page implements OnInit {
  question3: string = '0';
  question4: string = '0';

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private _serv: QuizService
  ) {}

  ngOnInit() {
    this.question3 = this._serv.getQuestion3();
    this.question4 = this._serv.getQuestion4();

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('quiz-elect12', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }

  nextPage() {
    this._serv.setQuestion3(this.question3);
    this._serv.setQuestion4(this.question4);
    this.navCtrl.navigateRoot(`/quiz-elect14`, {
      animated: true,
      animationDirection: 'forward',
    });
  }
}
