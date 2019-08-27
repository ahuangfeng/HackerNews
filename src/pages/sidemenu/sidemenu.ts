import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

export interface PageInterface {
  title: string;
  pageName: string;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SidemenuPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    //TODO: Change this array to other sections different from tab pages
    { title: 'Profile', pageName: 'ProfilePage', icon: 'person' },
    { title: 'Configuration', pageName: 'ConfigPage', icon: 'settings' }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SidemenuPage');
  }

  openPage(page: PageInterface) {
    this.navCtrl.push(page.pageName);
  }

  goToProfile() {
    this.navCtrl.push('ProfilePage');
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
  }
}
