import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing'

export class News {
  name: string;
  url: string;
  points: number;
  comments: number;
  author: string;
}

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  public newsDetails : News;

  constructor(public navCtrl: NavController, public navParams: NavParams, public share: SocialSharing) {
    this.newsDetails = this.navParams.get("newsDetails");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  twitterShare(message) {
    this.share.shareViaTwitter("Provando mi App", "www/assets/img/japan.png" , this.newsDetails.url).then(
      ()=>{ console.log("shareViaWhatsApp: Success");
     }).catch(() => {
       console.error("shareViaWhatsApp: Failed")
     });
  }

  whatsappShare() {
    this.share.shareViaWhatsApp("Provando mi App", undefined , this.newsDetails.url).then(
     ()=>{ console.log("shareViaTwitter: Success");
    }).catch(() => {
      console.error("shareViaTwitter: Failed")
    });
  }

  facebookShare() {
    this.share.shareViaFacebook("Provando mi App", "www/assets/img/japan.png" , this.newsDetails.url).then(
      ()=>{ console.log("shareViaFacebook: Success");
     }).catch(() => {
       console.error("shareViaFacebook: Failed")
     });
  }

  instagramShare() {
    this.share.shareViaInstagram("Provando mi App", "www/assets/img/japan.png").then(
      ()=>{ console.log("shareViaInstagram: Success");
     }).catch(() => {
       console.error("shareViaInstagram: Failed")
     });
  }
}
