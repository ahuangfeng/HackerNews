import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing'


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  public newsDetails = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public share: SocialSharing) {
    this.newsDetails = this.navParams.get("newsDetails");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  twitterShare(message) {
    /*this.share.shareViaTwitter(message, null, null).then(() => {

    }, () => {
      let toast = this.toastCtrl.create({message: "Error"});
      toast.present();
    });*/
  }

  whatsappShare() {
  
    this.share.shareViaWhatsApp("hello", "/assets/img/watanabe_mayu.jpg" , null).then(
     ()=>{ console.log("shareViaWhatsApp: Success");
    }).catch(() => {
      console.error("shareViaWhatsApp: Failed")
    });
  }
}
