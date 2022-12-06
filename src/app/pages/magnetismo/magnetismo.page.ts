import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-magnetismo',
  templateUrl: './magnetismo.page.html',
  styleUrls: ['./magnetismo.page.scss'],
})
export class MagnetismoPage implements OnInit {
  constructor(public navCtrl: NavController, private platform: Platform) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/contenido', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }
}