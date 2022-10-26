import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {
  options: string[] = ['Electrostática', 'Corriente', 'Magnetismo'];

  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  routeTopage(element: number) {
    // this.navCtrl.navigateRoot(`/${this.options[element].toLocaleLowerCase()}`, {
    //   animated: true,
    //   animationDirection: 'forward',
    // });
  }
}
