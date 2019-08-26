import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, MenuController} from 'ionic-angular';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { username:'', password:'' };

  constructor(public navCtrl: NavController, private auth: AuthService, private alertControl: AlertController, private loadingControl: LoadingController, private menu: MenuController) {
    this.menu.enable(false, 'myMenu');
  }

  //If in the LoginPage, create an account button is clicked pop the RegisterPage
  public registerUser() {
    this.navCtrl.push('RegisterPage');
    //this.navCtrl.setRoot('RegisterPage');
  }

  //Login from the Login Page
  public login(){
    this.showLoading();

    //Calling Login Method from our Authentication Service
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if(allowed){
        console.log("Logged In");

        //this.navCtrl.setRoot('HomePage');
        this.navCtrl.setRoot('SidemenuPage');
      } else {
          this.showError("Access Denied");
          console.log("ERROR");
      }
    });
  }

  showLoading() {
    this.loading = this.loadingControl.create({
      content: 'Please wait...', duration: 150
    });
    this.loading.present();
  }

  showError(error) {
    this.loading.present();

    let alert = this.alertControl.create({
      title: 'Login failed',
      subTitle: error,
      message: 'Input your username and password',
      buttons: ['OK']
    });

    alert.present();
  }
}
