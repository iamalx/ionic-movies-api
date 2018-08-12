import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { Action } from '../../../node_modules/rxjs/scheduler/Action';
import { UserProvider} from '../../providers/user/user';

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

  constructor(public navCtrl: NavController,
              public _user: UserProvider,
              public navParams: NavParams) {
  }

  categories: string[] = [
    {name:'Action',
    id: "28" }, 
    {name:'Comedy',
    id: "35" }, 
    {name:'Drama',
    id: "18" },
    {name:'Family',
    id: "10751" },
    {name:'Horror',
    id: "27" },
    {name:'Mistery',
    id: "9648" },
    {name:'Romance',
    id: "10749" }, 
    {name:'Science Fiction',
    id: "878" }, 
    {name:'Thriller',
    id: "53" }
  ]

  itemSelected(item) {
    this._user.isSearch = false;
    this.navCtrl.setRoot(HomePage, {item: item});
    console.log(item, "itemSlected()");
    
  }

  i: any; 
  onSearch(value1) {
    console.log(value1, "onSearch()");
    this._user.isSearch = true;
    this.navCtrl.setRoot(HomePage, {item: value1});
  }

}
