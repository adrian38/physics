import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { UtilsService } from './utils.service';
import { NavController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private _utilsService: UtilsService, public navController: NavController) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this._utilsService.getToken()) {
            return true;
        } else {
            console.error('Guard!!! PleaseLogin');
            this.navController.navigateRoot('/');
            return false;
        }
    }
}
