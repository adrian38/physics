import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  NavController,
  Platform,
} from '@ionic/angular';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
    public loadingController: LoadingController,
    private https: HttpClient
  ) {}

  ngOnInit() {
    this.subscriptions();
    this.getArtists();
  }

  async getArtists(): Promise<[]> {
    return new Promise<[]>((resolve, reject) => {
      try {
        const headers = {
          //page: `${page}`,
        };
        const requestOptions = {
          headers: new HttpHeaders(headers),
          //params: { page: `${page}` },
        };
        console.log('************* getArtist *************');
        const subscription = this.https
          .get(
            `https://moviesapi20221211011349.azurewebsites.net/api/genres`,
            requestOptions
          )
          .subscribe(
            (data: any) => {
              try {
                resolve(data);
                console.log('************* data *************');
                console.log(data);
              } catch (err) {
                console.log('************* error *************');
                console.log(err);
                reject(err);
              }
              subscription.unsubscribe();
            },
            (error) => reject(error)
          );
      } catch (err) {
        reject(err);
      }
    });
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
