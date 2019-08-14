import { Component } from '@angular/core';
import { NavController, Loading, AlertController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../services/auth-service';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { username:'', password:'' };

  constructor(public navCtrl: NavController, private auth: AuthService, private alertControl: AlertController) {

  }

  //Login from the Login Page
  public login(){
    //Calling Login Method from our Authentication Service
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if(allowed){
        console.log("Logged In");
      } else {
        error => {
          this.showError(error);
        }
      }
    })
  }

  showError(error) {
    this.loading.dismiss;

    let alert = this.alertControl.create({
      title: 'Fail',
      subTitle: error,
      buttons: ['OK']
    });
  }
}
