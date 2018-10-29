import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SigninPage } from '../pages/signin/signin';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { BookingPage } from '../pages/booking/booking';
import { MybookingPage } from '../pages/mybooking/mybooking';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { MyfavouritePage } from '../pages/myfavourite/myfavourite';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SigninPage,
    DashboardPage,
    BookingPage,
    MybookingPage,
    MyprofilePage,
    AboutusPage,
    MyfavouritePage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SigninPage,
    DashboardPage,
    BookingPage,
    MybookingPage,
    MyprofilePage,
    AboutusPage,
    MyfavouritePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
