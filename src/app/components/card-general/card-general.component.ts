import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-general',
  templateUrl: './card-general.component.html',
  styleUrls: ['./card-general.component.scss'],
})
export class CardGeneralComponent implements OnInit {
  @Input() title: string = '';

  image = '';

  constructor() {}

  ngOnInit() {
    this.image = `assets/images/${this.title}.png`;
  }
}
