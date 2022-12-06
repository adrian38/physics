import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-corriente',
  templateUrl: './corriente.page.html',
  styleUrls: ['./corriente.page.scss'],
})
export class CorrientePage implements OnInit {
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
