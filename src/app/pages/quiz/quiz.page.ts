import { Component, NgZone, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  display: boolean = false;
  animation: any;
  options: AnimationOptions = {
    autoplay: false,
    path: '/assets/lottie/countdown_go.json',
  };

  constructor(
    private ngZone: NgZone,
    public navCtrl: NavController,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/simulaciones/0', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }

  ngOnDestroy() {
    try {
      this.animation.destroy();
      console.log('************* on destroy *************');
    } catch (err) {
      console.log('Failed destroying lottie animation', err);
    }
  }

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem.currentFrame), 'frame';
    this.animation = animationItem;

    //   setTimeout(() => {
    //   //   animationItem.stop();
    //   // }, 400);
  }

  onLoopComplete() {
    console.log('************* animation finish *************');
    console.log();

    //   .then(() => {
    //   window.location.reload();
    // });

    this.ngZone.runOutsideAngular(() => this.animation.stop());
    this.navCtrl.navigateRoot(`/quiz-elect13`, {
      animated: true,
      animationDirection: 'forward',
    });
  }

  showDialog() {
    this.display = true;
    this.ngZone.runOutsideAngular(() => this.animation.play());
    // this.navCtrl.navigateRoot(`/quiz-elect1`, {
    //   animated: true,
    //   animationDirection: 'forward',
    // });
  }
}
