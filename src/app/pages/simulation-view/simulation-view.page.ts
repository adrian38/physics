import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private _sanitizer: DomSanitizer) {
    this.link2 =
      'https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_es.html';
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }
  simulationURL() {
    return this._sanitizer.bypassSecurityTrustResourceUrl(
      this.options[this.id].link
    );
  }
}
