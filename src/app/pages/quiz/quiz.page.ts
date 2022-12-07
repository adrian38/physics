import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
// import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  display: boolean = false;
  options: AnimationOptions = {
    path: '/assets/lottie/countdown.json',
  };

  constructor(public navCtrl: NavController, private platform: Platform) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/simulaciones', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }

  onLoopComplete() {
    this.navCtrl.navigateRoot(`/quiz-elect1`, {
      animated: true,
      animationDirection: 'forward',
    });
  }

  showDialog() {
    this.display = true;
  }
}
