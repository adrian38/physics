import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url_server: string = 'https://moviesapi20221211011349.azurewebsites.net';

  userCredentials: any;
  deleteUser$: any;

  _lastDocument: any;

  constructor(private http: HttpClient) {}

  async login(email: string, password: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      const postParams = {
        email: email,
        password: password,
      };
      try {
        this.http
          .post(`${this.url_server}/login`, postParams)
          .subscribe(async (data: any) => {
            if (data) {
              resolve(true);
            } else {
              resolve(false);
            }
          });
      } catch (err) {
        console.log('************* err *************');
        console.log(err);
      }
    });
  }
}
