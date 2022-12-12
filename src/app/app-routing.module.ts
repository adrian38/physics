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
    redirectTo: 'quiz-result',
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
    path: 'simulaciones/:id',
    loadChildren: () =>
      import('./pages/simulaciones/simulaciones.module').then(
        (m) => m.SimulacionesPageModule
      ),
  },
  {
    path: 'tutoriales/:id',
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
  {
    path: 'electrostática',
    loadChildren: () =>
      import('./pages/electrostatica/electrostatica.module').then(
        (m) => m.ElectrostaticaPageModule
      ),
  },
  {
    path: 'corriente',
    loadChildren: () =>
      import('./pages/corriente/corriente.module').then(
        (m) => m.CorrientePageModule
      ),
  },
  {
    path: 'magnetismo',
    loadChildren: () =>
      import('./pages/magnetismo/magnetismo.module').then(
        (m) => m.MagnetismoPageModule
      ),
  },
  {
    path: 'quiz',
    loadChildren: () =>
      import('./pages/quiz/quiz.module').then((m) => m.QuizPageModule),
  },
  {
    path: 'quiz-elect1',
    loadChildren: () =>
      import('./pages/quiz-elect1/quiz-elect1.module').then(
        (m) => m.QuizElect1PageModule
      ),
  },
  {
    path: 'quiz-elect12',
    loadChildren: () =>
      import('./pages/quiz-elect12/quiz-elect12.module').then(
        (m) => m.QuizElect12PageModule
      ),
  },
  {
    path: 'quiz-elect13',
    loadChildren: () =>
      import('./pages/quiz-elect13/quiz-elect13.module').then(
        (m) => m.QuizElect13PageModule
      ),
  },
  {
    path: 'quiz-elect14',
    loadChildren: () =>
      import('./pages/quiz-elect14/quiz-elect14.module').then(
        (m) => m.QuizElect14PageModule
      ),
  },
  {
    path: 'quiz-elect15',
    loadChildren: () =>
      import('./pages/quiz-elect15/quiz-elect15.module').then(
        (m) => m.QuizElect15PageModule
      ),
  },
  {
    path: 'quiz-result',
    loadChildren: () =>
      import('./pages/quiz-result/quiz-result.module').then(
        (m) => m.QuizResultPageModule
      ),
  },
  {
    path: 'lottie',
    loadChildren: () =>
      import('./shared/lottie/lottie.module').then((m) => m.LottiePageModule),
  },
  {
    path: 'progreso',
    loadChildren: () =>
      import('./pages/progreso/progreso.module').then(
        (m) => m.ProgresoPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
