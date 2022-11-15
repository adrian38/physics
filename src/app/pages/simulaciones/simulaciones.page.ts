import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import data from '../../utils/data-simulations.json';

@Component({
  selector: 'app-simulaciones',
  templateUrl: './simulaciones.page.html',
  styleUrls: ['./simulaciones.page.scss'],
})
export class SimulacionesPage implements OnInit {
  options: any[] = data;

  constructor(public navCtrl: NavController, private platform: Platform) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }

  routeTopage(id: number) {
    this.navCtrl.navigateRoot(`/simulation-view/${id}`, {
      animated: true,
      animationDirection: 'forward',
    });
  }
}
