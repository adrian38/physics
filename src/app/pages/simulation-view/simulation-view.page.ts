import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import data from '../../utils/data-simulations.json';

@Component({
  selector: 'app-simulation-view',
  templateUrl: './simulation-view.page.html',
  styleUrls: ['./simulation-view.page.scss'],
})
export class SimulationViewPage implements OnInit {
  id: number;
  link: any;
  link2: any;
  options: any[] = data;
  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private platform: Platform
  ) {
    this.link2 =
      'https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_es.html';
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/simulaciones', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }

  simulationURL() {
    return this._sanitizer.bypassSecurityTrustResourceUrl(
      this.options[this.id].link
    );
  }

  routeTopage(id: number) {
    console.log(id);
    this.navCtrl.navigateRoot(`/simulation-detail/${id}`, {
      animated: true,
      animationDirection: 'forward',
    });
  }
}
