import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.page.html',
  styleUrls: ['./lottie.page.scss'],
})
export class LottiePage implements OnInit {
  options: AnimationOptions = {
    path: '/assets/lottie/quiz_result.json',
  };

  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  onLoopComplete() {
    this.navCtrl.navigateRoot(`/quiz-result`, {
      // animated: true,
      // animationDirection: 'forward',
    });
  }
}
