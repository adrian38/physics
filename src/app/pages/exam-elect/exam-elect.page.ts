import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-elect',
  templateUrl: './exam-elect.page.html',
  styleUrls: ['./exam-elect.page.scss'],
})
export class ExamElectPage implements OnInit {
  justify1: string = '';
  justify2: string = '';
  justify3: string = '';
  justify4: string = '';
  justify5: string = '';
  justify6: string = '';

  answer: any[] = [];

  constructor() {}

  ngOnInit() {}

  nextPage() {
    //   this._serv.deleteFields();
    //   console.log('');
    //   console.log('----------------boton continuar----------');
    //   ///lamada a la api
    //   let body = {
    //     name: 'Electromagnetismo_1',
    //     score: this.correctAnswerPorCentual,
    //     type: 'quiz',
    //     status: false,
    //   };
    //   console.log('body', body);
    //   this.saveResult(body);
  }
}
