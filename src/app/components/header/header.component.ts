import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerText: string = '';
  @Input() back: boolean = false;

  constructor(
    private _location: Location,
    private navCon: NavController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  backEvent() {
    if (this._location.isCurrentPathEqualTo('/simulaciones')) {
      this.navCon.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    }
    if (
      this._location.isCurrentPathEqualTo(
        `/simulation-view/${this.route.snapshot.paramMap.get('id')}`
      )
    ) {
      this.navCon.navigateRoot('/simulaciones', {
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
    if (this._location.isCurrentPathEqualTo('/examen')) {
      this.navCon.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    }

    if (
      this._location.isCurrentPathEqualTo(
        `/simulation-detail/${this.route.snapshot.paramMap.get('id')}`
      )
    ) {
      this.navCon.navigateRoot(
        `/simulation-view/${this.route.snapshot.paramMap.get('id')}`,
        {
          animated: true,
          animationDirection: 'back',
        }
      );
    }
  }
}
