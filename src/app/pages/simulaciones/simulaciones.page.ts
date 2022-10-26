import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulaciones',
  templateUrl: './simulaciones.page.html',
  styleUrls: ['./simulaciones.page.scss'],
})
export class SimulacionesPage implements OnInit {
  options: string[] = ['Contenido', 'Simulaciones', 'Tutoriales', 'Autoexamen'];

  constructor() {}

  ngOnInit() {}
}
