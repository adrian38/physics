import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-general',
  templateUrl: './card-general.component.html',
  styleUrls: ['./card-general.component.scss'],
})
export class CardGeneralComponent implements OnInit {
  @Input() title: string = '';

  disable: boolean = false;
  image = '';

  constructor() {}

  ngOnInit() {
    this.image = `assets/images/${this.title}.png`;

    // if (
    //   // this.title === 'Tutoriales' ||

    //   // this.title === 'Evaluación' ||
    //   this.title === 'Magnetismo'
    // ) {
    //   this.disable = true;
    // }
  }
}
