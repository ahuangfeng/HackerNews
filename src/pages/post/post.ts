import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  post() {
    this.navCtrl.popToRoot();
  }

  
  @ViewChild('myInput') myInput: ElementRef;
  resize() {
    //Decreases textarea size if we delete rows
    this.myInput.nativeElement.style.height = 'auto';
    //Increments textarea size if we add rows
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
  }
}
