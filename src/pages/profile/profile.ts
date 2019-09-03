import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NewsPage } from '../news/news';
import { NewsService } from '../../services/news-service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userNews = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService: NewsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.newsService.getNews().subscribe((response) => {this.userNews = response});
  }

  goToNewsPage(news) {
    this.navCtrl.push(NewsPage, { newsDetails: news})
  }

  post() {
    console.log("POSTING");
    this.navCtrl.push('PostPage');
  }
}
