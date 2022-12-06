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
    console.log('************* path *************');
    console.log(this._location.path());

    if (this._location.isCurrentPathEqualTo('/home')) {
      this.navCon.navigateRoot('/login', {
        animated: true,
        animationDirection: 'back',
      });
    }

    if (this._location.isCurrentPathEqualTo('/quiz')) {
      this.navCon.navigateRoot('/simulaciones', {
        animated: true,
        animationDirection: 'back',
      });
    }

    if (this._location.isCurrentPathEqualTo('/electrost%C3%A1tica')) {
      this.navCon.navigateRoot('/contenido', {
        animated: true,
        animationDirection: 'back',
      });
    }

    if (this._location.isCurrentPathEqualTo('/magnetismo')) {
      this.navCon.navigateRoot('/contenido', {
        animated: true,
        animationDirection: 'back',
      });
    }
    if (this._location.isCurrentPathEqualTo('/corriente')) {
      this.navCon.navigateRoot('/contenido', {
        animated: true,
        animationDirection: 'back',
      });
    }

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
    if (this._location.isCurrentPathEqualTo('/autoexamen')) {
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
