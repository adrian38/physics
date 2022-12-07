import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import data from '../../utils/data-simulations.json';

@Component({
  selector: 'app-simulaciones',
  templateUrl: './simulaciones.page.html',
  styleUrls: ['./simulaciones.page.scss'],
})
export class SimulacionesPage implements OnInit {
  options: any[] = data;
  // tutorial: boolean = false;

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }

  routeTopage(id: number) {
    if (parseInt(this.route.snapshot.paramMap.get('id'))) {
      this.navCtrl.navigateRoot(`/tutoriales/${id}`, {
        animated: true,
        animationDirection: 'forward',
      });
    } else {
      this.navCtrl.navigateRoot(`/simulation-view/${id}`, {
        animated: true,
        animationDirection: 'forward',
      });
    }
  }
}
