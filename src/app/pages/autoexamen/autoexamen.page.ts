import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-autoexamen',
  templateUrl: './autoexamen.page.html',
  styleUrls: ['./autoexamen.page.scss'],
})
export class AutoexamenPage implements OnInit {
  constructor(public navCtrl: NavController, private platform: Platform) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }
}
