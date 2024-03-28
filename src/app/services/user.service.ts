import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
    url_server: string = '';

    constructor(private http: HttpClient) {
        this.url_server = environment.PHYSICS_BACK_SECURITY + '://' + environment.PHYSICS_BACK_URL + ':' + environment.PHYSICS_BACK_PORT;
    }

    async getUsers(): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            this.http.get(`${this.url_server}/user/`).subscribe(async (data: any) => {
                console.log('************* data *************');
                console.log(data);

                resolve(data as any[]);
            });
        });
    }

    async login(email: string, password: string): Promise<boolean> {
        const postParams = {
            username: email,
            password: password,
        };
        const response: HttpResponse<any> | undefined = await this.http
            .post(`${this.url_server}/auth/login`, postParams, {
                observe: 'response',
            })
            .toPromise();
        if (response?.body && response.body.access_token) {
            localStorage.setItem('access_token', response.body.access_token);
            console.log('*************response.body.user  *************');
            console.log(response.body.access_token);
            sessionStorage.setItem('user', response.body.user._doc.role);
            return true;
        } else {
            return false;
        }
    }

    async register(user: User): Promise<boolean> {
        const postParams = {
            email: user.email,
            username: user.username,
            password: user.password,
            role: user.role,
        };
        const response: HttpResponse<any> | undefined = await this.http
            .post(`${this.url_server}/user/signup`, postParams, {
                observe: 'response',
            })
            .toPromise();
        if (response?.body) {
            return true;
        } else {
            return false;
        }
    }

    async delete(usersToDelete: any): Promise<boolean> {
        const response: HttpResponse<any> | undefined = await this.http
            .delete(`${this.url_server}/user/`, {
                observe: 'response',
                body: usersToDelete,
            })
            .toPromise();
        if (response?.body) {
            console.log('************* response?.body *************');
            console.log(response?.body);
            return true;
        } else {
            return false;
        }
    }

    async editUser(usersToEdit: any): Promise<boolean> {
        const options = usersToEdit;

        const response: any = await this.http.patch(`${this.url_server}/user/`, options).toPromise();

        if (response?.modifiedCount > 0) {
            return true;
        } else {
            return false;
        }
    }
}
