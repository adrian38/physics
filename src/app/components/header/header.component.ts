import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerText: string = '';
  @Input() back: boolean = false;

  constructor(private _location: Location, private navCon: NavController) {}

  ngOnInit() {}

  backEvent() {
    if (this._location.isCurrentPathEqualTo('/simulaciones')) {
      this.navCon.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    }
    if (this._location.isCurrentPathEqualTo('/contenido')) {
      this.navCon.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    }
  }
}
