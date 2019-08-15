import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../services/auth-service';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { username:'', password:'' };

  constructor(public navCtrl: NavController, private auth: AuthService, private alertControl: AlertController, private loadingControl: LoadingController) {

  }

  //Login from the Login Page
  public login(){
    this.showLoading();

    //Calling Login Method from our Authentication Service
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if(allowed){
        console.log("Logged In");

        //Setting the root page as Home Page
        //this.navCtrl.setRoot();
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
