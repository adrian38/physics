import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import data from '../../utils/data-user.json';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.page.html',
  styleUrls: ['./progreso.page.scss'],
})
export class ProgresoPage implements OnInit {
  options: any = data;
  data: any;
  constructor(public navCtrl: NavController, private platform: Platform) {
    let temp: any[] = [];
    let temp_notes: any[] = [];

    for (let element of this.options.quiz[0].nota) {
      temp.push(element.intento.toString());
      temp_notes.push(element.value);
    }

    this.data = {
      labels: temp,
      datasets: [
        {
          label: 'Intentos',
          data: temp_notes,
        },
      ],
    };
  }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/home', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }
}