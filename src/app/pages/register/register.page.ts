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
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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
    ) { }

  ngOnInit() {
  }

  async set_user(body:any)
  {
    this.showLoading('Registrando');

    console.log(body,"body");
   
    try {
      if (await this._apiService.register(body)) {
        this.navController.navigateRoot('/home', {
          animated: true,
          animationDirection: 'forward',
      }); } else {
        this.btn_disabled = false;
        this.showAlert();
      }
    } catch (err) {
      this.btn_disabled = false;
      this.showAlert();
    }
    this.loading.dismiss();
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
    if (this.user.name.length>0) {
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
      
    }

    

  }
  async showLoading(message: string) {
    this.btn_disabled = true;
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: message,
    });

    return this.loading.present();
  }

}
