import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  NavController,
  Platform,
} from '@ionic/angular';
import { UsuarioModel } from 'src/app/models/usuario.model';
// import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/backend.service';
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
    // private https: HttpClient,
    private _apiService: ApiService
  ) {}

  ngOnInit() {
    this.subscriptions();
  }
  ngOnDestroy() {}

  async login(email: string, password: string) {
    this.showLoading('Verificando');

    try {
      if (await this._apiService.login(email, password)) {
        this.checkUser();
      } else {
        this.btn_disabled = false;
        this.showAlert();
      }
    } catch (err) {
      this.btn_disabled = false;
      this.showAlert();
    }
    this.loading.dismiss();
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
    this.user = this._apiService.getUser();
    console.log(this.user, "user");
    if (this.user.type === 'Estudiante') {
      if (this.loading) {
        this.loading.dismiss();
      }
      this.navController.navigateRoot('/home', {
        animated: true,
        animationDirection: 'forward',
      });
    } else {
      if (this.loading) {
        this.loading.dismiss();
      }
      this.btn_disabled = false;
      this.showAlertProfesor();
    }
  }

  onSubmit() {
    // console.log(this.user, 'user');
    this.login(this.user.email, this.user.password);
  }

  async showAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Usuario deshabilitado o mal escrito',
      message: 'Si el problema persiste contactar con la administración',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          cssClass: 'secondary',
        },
      ],
    });

    await alert.present();
  }

  async showAlertProfesor() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Por favor utilice la aplicacion de profesor',
      message: 'Si el problema persiste contactar con la administración',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          cssClass: 'secondary',
        },
      ],
    });

    await alert.present();
  }

  async showLoading(message: string) {
    this.btn_disabled = true;
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

  register_user(){
    this.navController.navigateRoot('/register', {
        animated: true,
       animationDirection: 'forward',
     });
  }
}
