import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
//import { RegisterPageModule } from '../pages/register/register.module';

//Declarations - Compiler
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { NewsPageModule } from '../pages/news/news.module';
//import { RegisterPage } from '../pages/register/register';
import { RegisterPageModule } from '../pages/register/register.module';
import { PostPageModule } from '../pages/post/post.module';

//Services - Provider
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth-service';
import { NewsService } from '../services/news-service';

import { SocialSharing } from '@ionic-native/social-sharing'

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RegisterPageModule,
    PostPageModule,
    NewsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    NewsService,
    SocialSharing
  ]
})
export class AppModule {}
