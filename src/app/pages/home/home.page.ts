import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options: string[] = ['Contenido', 'Simulaciones', 'Tutoriales', 'Autoexamen'];

  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  routeTopage(element: number) {
    this.navCtrl.navigateRoot(`/${this.options[element].toLocaleLowerCase()}`, {
      animated: true,
      animationDirection: 'forward',
    });
  }
}
