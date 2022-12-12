import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {
  options: string[] = ['Electrostática', 'Corriente', 'Magnetismo'];

  constructor(public navCtrl: NavController, private platform: Platform) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }
  routeTopage(element: number) {
    if (element === 2) {
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
