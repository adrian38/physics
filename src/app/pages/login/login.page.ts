import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  NavController,
  Platform,
} from '@ionic/angular';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading: HTMLIonLoadingElement = null;
  btn_disabled: boolean = false;
  user = new UsuarioModel();

  constructor(
    public navController: NavController,
    public alertController: AlertController,
    public platform: Platform,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.subscriptions();
  }

  subscriptions() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.showExitAlert();
    });
  }

  showExitAlert() {
    this.alertController
      .create({
        header: 'Alerta',
        message: 'Desea salir de la aplicación?',
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
              navigator['app'].exitApp();
            },
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }

  checkUser() {
    this.navController.navigateRoot('/home', {
      animated: true,
      animationDirection: 'forward',
    });
  }

  onSubmit() {
    this.navController.navigateRoot('/home', {
      animated: true,
      animationDirection: 'forward',
    });
  }

  async showAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Usuario deshabilitado o mal escrito',
      message: 'Si el problema persiste contactar con la administración',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          //handler: () => {},
        },
      ],
    });

    await alert.present();
  }

  async showLoading(message: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: message,
    });

    return this.loading.present();
  }

  forgottenPassword() {
    // this.navController.navigateRoot('/user-password-lost', {
    //   animated: true,
    //   animationDirection: 'forward',
    // });
  }
}
