import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quiz = { name: 'name', count: 0, answer: [] };

  question1: string = '';
  question2: string = '';
  question3: string = '';
  question4: string = '';
  question5: string = '';
  question6: string = '';
  question7: string = '';

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
    this.question1 = '';
    this.question2 = '';
    this.question3 = '';
    this.question4 = '';
    this.question5 = '';
    this.question6 = '';
  }
}
