import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quiz = { name: 'name', count: 0, answer: [] };

  question1: string = '0';
  question2: string = '0';
  question3: string = '0';
  question4: string = '0';
  question5: string = '0';
  question6: string = '0';
  question7: string = '0';

  constructor() {}

  setQuiz(payload: any) {
    this.quiz.name = payload.name;
    this.quiz.count = payload.count;
    this.quiz.answer = payload.answer;
  }
  getQuiz() {
    return this.quiz;
  }

  setQuestion1(result: string) {
    this.question1 = result;
  }

  getQuestion1() {
    return this.question1;
  }
  setQuestion2(result: string) {
    this.question2 = result;
  }

  getQuestion2() {
    return this.question2;
  }
  setQuestion3(result: string) {
    this.question3 = result;
  }

  getQuestion3() {
    return this.question3;
  }
  setQuestion4(result: string) {
    this.question4 = result;
  }

  getQuestion4() {
    return this.question4;
  }
  setQuestion5(result: string) {
    this.question5 = result;
  }

  getQuestion5() {
    return this.question5;
  }
  setQuestion6(result: string) {
    this.question6 = result;
  }
  getQuestion6() {
    return this.question6;
  }
  setQuestion7(result: string) {
    this.question7 = result;
  }
  getQuestion7() {
    return this.question7;
  }

  deleteFields() {
    this.quiz = { name: 'name', count: 0, answer: [] };
    this.question1 = '0';
    this.question2 = '0';
    this.question3 = '0';
    this.question4 = '0';
    this.question5 = '0';
    this.question6 = '0';
  }
}
