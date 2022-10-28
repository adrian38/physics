import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pre',
  templateUrl: './card-pre.component.html',
  styleUrls: ['./card-pre.component.scss'],
})
export class CardPreComponent implements OnInit {
  @Input() simulation_pre: any = '';
  constructor() {}

  ngOnInit() {}
}
