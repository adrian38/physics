import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'contenido',
    loadChildren: () =>
      import('./pages/contenido/contenido.module').then(
        (m) => m.ContenidoPageModule
      ),
  },
  {
    path: 'simulaciones',
    loadChildren: () =>
      import('./pages/simulaciones/simulaciones.module').then(
        (m) => m.SimulacionesPageModule
      ),
  },
  {
    path: 'tutoriales',
    loadChildren: () =>
      import('./pages/tutoriales/tutoriales.module').then(
        (m) => m.TutorialesPageModule
      ),
  },
  {
    path: 'autoexamen',
    loadChildren: () =>
      import('./pages/autoexamen/autoexamen.module').then(
        (m) => m.AutoexamenPageModule
      ),
  },
  {
    path: 'simulation-view/:id',
    loadChildren: () =>
      import('./pages/simulation-view/simulation-view.module').then(
        (m) => m.SimulationViewPageModule
      ),
  },
  {
    path: 'simulation-detail/:id',
    loadChildren: () =>
      import('./pages/simulation-detail/simulation-detail.module').then(
        (m) => m.SimulationDetailPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
