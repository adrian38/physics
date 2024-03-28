import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UtilsService {
    resposeError: boolean = false;

    constructor() {}

    getLoggedInUser(): any {
        const userString = sessionStorage.getItem('user');
        if (userString) {
            const user = JSON.parse(userString);
            if (user) return user;
        }
        return undefined;
    }

    getToken(): boolean {
        const tokenString = localStorage.getItem('access_token');

        if (tokenString) {
            return true;
        }
        return false;
    }

    isSuperUser(): boolean {
        const userString = sessionStorage.getItem('user');
        if (userString) {
            const user = JSON.parse(userString);
            if (user.superusuario) {
                return true;
            }
        }
        return false;
    }

    isClient(user: any) {
        if (!user) return false;
        if (user?.cliente && !user?.administrador && !user?.superusuario) return true;
        return false;
    }

    isClientUser(): boolean {
        //? Returns true if is only a client, false if is superusuario or administrator
        const userString = sessionStorage.getItem('user');
        if (userString) {
            const user: any = JSON.parse(userString);
            if (user.administrador || user.superusuario) {
                // operators cannot enter on app || user.operario
                return false;
            }
            if (user.cliente) {
                return true;
            }
        }
        return false;
    }

    isAdmin(): boolean {
        const userString = sessionStorage.getItem('user');
        if (userString) {
            const user: any = JSON.parse(userString);
            if (user.administrador) {
                return true;
            }
        }
        return false;
    }
}
