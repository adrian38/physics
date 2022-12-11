import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url_server: string = 'https://moviesapi20221211011349.azurewebsites.net';

  user: any;

  constructor(private http: HttpClient) {}

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
              this.user = data[0];
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
    return new Promise<boolean>(async (resolve, reject) => {
      let postParams = {
        id_student: this.user.id,
      };

      let final = { ...postParams, ...body };

      try {
        this.http
          .post(`${this.url_server}/exam`, final)
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

  //   async saveExamResults(id: number): Promise<any> {
  //     return new Promise<boolean>(async (resolve, reject) => {
  //       this.http
  //         .get(`${this.url_server}/user/${id}/footprints`)
  //         .subscribe(async (data: any) => {
  //           if (data) {
  //             resolve(data);
  //           } else {
  //             reject();
  //           }
  //         });
  //     });
  //   }
}
