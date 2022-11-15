import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private _sanitizer: DomSanitizer) {
    this.link2 =
      'https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_es.html';
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }
  simulationURL() {
    return this._sanitizer.bypassSecurityTrustResourceUrl(
      this.options[this.id - 1].link
    );
  }
}
