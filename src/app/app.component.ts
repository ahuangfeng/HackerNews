import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Tabs, Events, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';

import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { Tab3Page } from '../pages/tab3/tab3';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //First page to be loaded in the nav controller
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  tab1Root = Tab1Page;
  tab2Root = Tab2Page;
  tab3Root = Tab3Page;

  constructor(public events: Events, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    
    // used for an example of ngFor and navigation
    /*this.pages = [
      { title: 'HomePage', component: HomePage },
      { title: 'List', component: ListPage }
    ];*/

    /*events.subscribe('user:logout', () => {
      this.navCtrl.popToRoot();
    });*/
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    //this.nav.push(page.component);
  }
}
