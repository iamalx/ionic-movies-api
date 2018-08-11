import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../../pages/search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public navParam: NavParams) {
  }
  ionViewWillEnter() {
    this.searchValue = this.navParam.get('item')
    console.log(this.searchValue, "WillEnter")
  }
  searchValue: any;
  onSerch() {
    this.navCtrl.push(SearchPage);
  }
}
