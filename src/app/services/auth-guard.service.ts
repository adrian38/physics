import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
} from '@angular/router';
import { ApiService } from '../services/backend.service';
import { UsuarioModel } from '../models/usuario.model';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  user: UsuarioModel = new UsuarioModel();
  constructor(private _apiService: ApiService, private route: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.user = this._apiService.getUser();
    if (this.user.connected == true) {
      return true;
    } else {
      console.error('Guard!!! PleaseLogin');
      this.route.navigateByUrl('/login');
      return false;
    }
  }
}
