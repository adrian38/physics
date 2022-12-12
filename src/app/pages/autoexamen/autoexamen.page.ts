import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-autoexamen',
  templateUrl: './autoexamen.page.html',
  styleUrls: ['./autoexamen.page.scss'],
})
export class AutoexamenPage implements OnInit {
  options: string[] = ['Electrostática', 'Circuitos', 'Magnetismo'];

  constructor(public navCtrl: NavController, private platform: Platform) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }
  routeTopage(element: number) {
    if (element === 0) {
      this.navCtrl.navigateRoot(`/exam-elect`, {
        animated: true,
        animationDirection: 'forward',
      });
    } else if (element === 1) {
      this.navCtrl.navigateRoot(`/exam-circu`, {
        animated: true,
        animationDirection: 'forward',
      });
    } else if (element === 2) {
      this.navCtrl.navigateRoot(`/exam-magne`, {
        animated: true,
        animationDirection: 'forward',
      });
    }
  }
}
