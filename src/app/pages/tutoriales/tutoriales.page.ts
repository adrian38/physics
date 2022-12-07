import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import data from '../../utils/data-simulations.json';

@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.page.html',
  styleUrls: ['./tutoriales.page.scss'],
})
export class TutorialesPage implements OnInit {
  id: number;
  link: any;
  link2: any;
  options: any[] = data;

  constructor(
    private route: ActivatedRoute,
    public navCtrl: NavController,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtrl.navigateRoot('/simulaciones/1', {
        animated: true,
        animationDirection: 'back',
      });
    });
  }
}
