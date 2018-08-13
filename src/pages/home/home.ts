import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../../pages/search/search';
import { UserProvider} from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public navParam: NavParams, 
              public _user: UserProvider) {
  }
  ionViewWillEnter() {
    this.name = sessionStorage.getItem('name')
    this.searchValue = this.navParam.get('item')
    console.log(this.searchValue, "WillEnter")
    this.displayMovies(this.searchValue);
  }
  name: any = ''

  searchValue: any;
  mainPropData: any;
  movieTitles: any[] = [];
  imagesArray: any[] = [];
  displayMovies(inqury) {
    this._user.getData(inqury).
    subscribe( data => {
      this.mainPropData = data.results;
     // console.log(this.mainPropData, 'mainPRop');
      this.mainPropData.forEach( element => {
      this.movieTitles.push(element.title);
      //console.log(this.movieTitles, "elementTitle");
      this.imagesArray.push(element.backdrop_path);
      //console.log(this.imagesArray);
     
     })
    });   
  }
  onSearch() {
    this.navCtrl.push(SearchPage);
  }
}
