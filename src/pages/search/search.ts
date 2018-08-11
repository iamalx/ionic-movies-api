import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { Action } from '../../../node_modules/rxjs/scheduler/Action';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  categories: string[] = ['Action', 'Comedy', 'Drama', 'Family', 'Horror', 'Mistery', 'Romance', 'Thriller']

  itemSelected(item) {
    this.navCtrl.setRoot(HomePage, {item: item});
    console.log(item, "itemSlected()");
  }

  i: any; 
  onSearch(value1) {
    this.i = value1;
    console.log(this.i, "getItems()");
    this.navCtrl.setRoot(HomePage, {item: value1});
  }

}
