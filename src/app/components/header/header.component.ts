import { Component, Input, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

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
    private route: ActivatedRoute,
    public alertController: AlertController,
    private _serv: QuizService
  ) {}

  ngOnInit() {
    // console.log('************* path ngonInit *************');
    // console.log(this._location.path());

    if (this._location.path() === '/simulaciones/1') {
      this.headerText = 'Tutoriales';
    }
    // else {
    //   console.log('************* delse iferente path *************');
    //   console.log();
    // }
  }

  backEvent() {
    console.log('************* path *************');
    console.log(this._location.path());

    if (this._location.isCurrentPathEqualTo('/home')) {
      this.navCon.navigateRoot('/login', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (this._location.isCurrentPathEqualTo('/exam-elect')) {
      this.navCon.navigateRoot('/autoexamen', {
        animated: true,
        animationDirection: 'back',
      });
    }
      else if (this._location.isCurrentPathEqualTo('/register')) {
        this.navCon.navigateRoot('/login', {
          animated: true,
          animationDirection: 'back',
        });
    } else if (this._location.isCurrentPathEqualTo('/exam-circu')) {
      this.navCon.navigateRoot('/autoexamen', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (this._location.isCurrentPathEqualTo('/exam-magne')) {
      this.navCon.navigateRoot('/autoexamen', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (this._location.isCurrentPathEqualTo('/quiz')) {
      this.navCon.navigateRoot('/simulaciones/0', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (this._location.isCurrentPathEqualTo('/electrost%C3%A1tica')) {
      this.navCon.navigateRoot('/contenido', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (this._location.isCurrentPathEqualTo('/quiz-elect1')) {
      this.alertController
        .create({
          header: 'Alerta',
          message: 'Desea salir del Quiz?',
          backdropDismiss: false,
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {},
            },
            {
              text: 'Salir',
              handler: () => {
                this._serv.deleteFields();
                this.navCon.navigateRoot('/simulaciones/0', {
                  animated: true,
                  animationDirection: 'back',
                });
              },
            },
          ],
        })
        .then((alert) => {
          alert.present();
        });
    } else if (this._location.isCurrentPathEqualTo('/quiz-elect12')) {
      this.navCon.navigateRoot('/quiz-elect1', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (this._location.isCurrentPathEqualTo('/quiz-elect13')) {
      this.navCon.navigateRoot('/quiz-elect12', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (this._location.isCurrentPathEqualTo('/quiz-elect14')) {
      this.navCon.navigateRoot('/quiz-elect13', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (this._location.isCurrentPathEqualTo('/quiz-elect15')) {
      this.navCon.navigateRoot('/quiz-elect14', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (this._location.isCurrentPathEqualTo('/quiz-result')) {
      this._serv.deleteFields();
      this.navCon.navigateRoot('/simulaciones/0', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (this._location.isCurrentPathEqualTo('/magnetismo')) {
      this.navCon.navigateRoot('/contenido', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (this._location.isCurrentPathEqualTo('/corriente')) {
      this.navCon.navigateRoot('/contenido', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (
      this._location.isCurrentPathEqualTo(
        `/simulaciones/${this.route.snapshot.paramMap.get('id')}`
      )
    ) {
      this.navCon.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (
      this._location.isCurrentPathEqualTo(
        `/tutoriales/${this.route.snapshot.paramMap.get('id')}`
      )
    ) {
      this.navCon.navigateRoot('/simulaciones/1', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (
      this._location.isCurrentPathEqualTo(
        `/simulation-view/${this.route.snapshot.paramMap.get('id')}`
      )
    ) {
      this.navCon.navigateRoot('/simulaciones/0', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (this._location.isCurrentPathEqualTo('/contenido')) {
      this.navCon.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (this._location.isCurrentPathEqualTo('/progreso')) {
      this.navCon.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (this._location.isCurrentPathEqualTo('/autoexamen')) {
      this.navCon.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    } else if (
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
