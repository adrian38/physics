import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-electrostatica',
  templateUrl: './electrostatica.page.html',
  styleUrls: ['./electrostatica.page.scss'],
})
export class ElectrostaticaPage implements OnInit {
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
