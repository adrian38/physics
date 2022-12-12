import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url_server: string = 'https://moviesapi20221211011349.azurewebsites.net';

  user = new UsuarioModel();

  constructor(private http: HttpClient) {}

  getUser() {
    return this.user;
  }

  async login(email: string, password: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      const postParams = {
        email: email,
        password: password,
      };

      console.log(postParams, 'postParams User');

      try {
        this.http
          .post(`${this.url_server}/login`, postParams)
          .subscribe(async (data: any) => {
            console.log(data, 'user');

            if (data.length > 0) {
              this.user.username = data[0].email;
              this.user.name = data[0].full_name;
              this.user.id = data[0].id;
              this.user.phone = data[0].phone_number;
              this.user.type = data[0].type;
              this.user.connected = true;
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

  async saveExamResults(body: any): Promise<any> {
    console.log('body', body);
    return new Promise<boolean>(async (resolve, reject) => {
      let postParams = {
        id_student: this.user.id,
      };

      let final = { ...postParams, ...body };
      console.log('final', final);
      try {
        this.http
          .post(`${this.url_server}/exam`, final)
          .subscribe(async (data: any) => {
            resolve(true);
            /*  if (data) {
              resolve(true);
            } else {
              resolve(false);
            }*/
          });
      } catch (err) {
        console.log('************* err *************');
        console.log(err);
      }
    });
  }

  async getExamResults(): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      this.http
        .get(`${this.url_server}/exam/${this.user.id}`)
        .subscribe(async (data: any) => {
          if (data) {
            resolve(data);
          } else {
            reject();
          }
        });
    });
  }
}
