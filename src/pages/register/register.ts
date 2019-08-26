import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { AuthService } from '../../services/auth-service';

//Lazy loading with IonicPage() and regsiter.module.ts
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createOK = false;
  registerCredentials = { username:'', password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertControl: AlertController, private auth: AuthService) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  public register() {

  }

  showError(error) {
    let alert = this.alertControl.create({
      title: 'Registration Failed',
      subTitle: error,
      message: 'Enter all fields',
      buttons: ['OK']
    });

    alert.present();
  }
}
