import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NewsPage } from '../news/news';
import { NewsService } from '../../services/news-service';

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  public allNews = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService: NewsService) {
  }

  ionViewDidLoad() {
    this.newsService.getNews().subscribe((response) => {this.allNews = response});
  }

  goToNewsPage(news) {
    this.navCtrl.push(NewsPage, { newsDetails: news})
  }
}