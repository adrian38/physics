import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options: string[] = [
    'Contenido',
    'Simulaciones',
    'Tutoriales',
    'Evaluación',
    'Progreso',
  ];

  constructor(public navCtrl: NavController, private platform: Platform) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/login', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }

  routeTopage(element: number) {
    if (element === 3) {
      this.navCtrl.navigateRoot(`/autoexamen`, {
        animated: true,
        animationDirection: 'forward',
      });
    } else if (element === 1) {
      this.navCtrl.navigateRoot(
        `/${this.options[element].toLocaleLowerCase()}/0`,
        {
          animated: true,
          animationDirection: 'forward',
        }
      );
    } else if (element === 2) {
      this.navCtrl.navigateRoot(`/simulaciones/1`, {
        animated: true,
        animationDirection: 'forward',
      });
    } else {
      this.navCtrl.navigateRoot(
        `/${this.options[element].toLocaleLowerCase()}`,
        {
          animated: true,
          animationDirection: 'forward',
        }
      );
    }
  }
}
