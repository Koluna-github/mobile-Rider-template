import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//provider
import { ListSocketDemoProvider } from '../providers/list-socket-demo/list-socket-demo';
import { PopSerProvider } from '../providers/pop-ser/pop-ser';
import { HttpserProvider } from '../providers/httpser/httpser';
import { HttpApiListSerProvider } from '../providers/http-api-list-ser/http-api-list-ser';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
        mode:'ios',
        pageTransition:'md-transition',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListSocketDemoProvider,
    PopSerProvider,
    HttpserProvider,
    HttpApiListSerProvider,
  ]
})
export class AppModule {}
