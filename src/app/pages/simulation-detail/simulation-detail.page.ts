import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import data from '../../utils/data-simulations.json';

@Component({
  selector: 'app-simulation-detail',
  templateUrl: './simulation-detail.page.html',
  styleUrls: ['./simulation-detail.page.scss'],
})
export class SimulationDetailPage implements OnInit {
  id: number;
  link: any;
  link2: any;
  options: any[] = data;
  disabled_quiz: boolean = true;
  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer
  ) {
    this.link2 =
      'https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_es.html';
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    if (this.id - 1 === 0) {
      this.disabled_quiz = false;
    }
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot(
        `/simulation-view/${this.route.snapshot.paramMap.get('id')}`,
        {
          animated: true,
          animationDirection: 'back',
        }
      );
    });
  }
  openQuiz() {
    this.navCtrl.navigateRoot(`/quiz`, {
      animated: true,
      animationDirection: 'forward',
    });
  }

  simulationURL() {
    return this._sanitizer.bypassSecurityTrustResourceUrl(
      this.options[this.id - 1].link
    );
  }
}
