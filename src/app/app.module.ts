import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPaquetePage } from '../pages/add-paquete/add-paquete';
//import { LibroProvider } from '../providers/libro/libro';
import { PaqueteProvider } from '../providers/paquete/paquete';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPaquetePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPaquetePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    //LibroProvider,
    PaqueteProvider
  ]
})
export class AppModule { }
