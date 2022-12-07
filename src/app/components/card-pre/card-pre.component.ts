import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-pre',
  templateUrl: './card-pre.component.html',
  styleUrls: ['./card-pre.component.scss'],
})
export class CardPreComponent implements OnInit {
  @Input() simulation_pre: any = '';
  disable: boolean = false;
  constructor(private route: ActivatedRoute, private _location: Location) {}

  ngOnInit() {
    if (
      this._location.isCurrentPathEqualTo(
        `/simulation-view/${this.route.snapshot.paramMap.get('id')}`
      )
    ) {
    } else {
      if (parseInt(this.route.snapshot.paramMap.get('id'))) {
        if (this.simulation_pre.id !== '1' && this.simulation_pre.id !== '5') {
          this.disable = true;
        }
      }
    }
  }
}
