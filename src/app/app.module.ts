import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { QuizService } from './services/quiz.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptor/header-interceptor';

import { UserService } from './services/user.service';
import { ApiService } from './services/backend.service';

export function playerFactory(): any {
    return import('lottie-web');
}

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, LottieModule.forRoot({ player: playerFactory }), NgxChartsModule, HttpClientModule],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }, { provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, QuizService, ApiService, UserService],
    bootstrap: [AppComponent],
})
export class AppModule {}
