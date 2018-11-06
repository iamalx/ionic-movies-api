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
  ionViewDidLoad() {
    this.searchValue = this.navParam.get('item')
    console.log(this.searchValue, "WillEnter")
    this.displayMovies(this.searchValue);
  }
  ionViewWillEnter() {
    this.name = sessionStorage.getItem('name') 
  }

  name: any = '';
  searchValue: any;
  mainPropData: any;
  movieTitles: any[] = [];
  imagesArray: any[] = [];
  overviewArray: any[] = []; 
  ratingArray: any[] = [];

  displayMovies(inqury) {
    this._user.getData(inqury).
    subscribe( data => {
      this.mainPropData = data['results'];
      this.mainPropData.forEach( element => {
      this.movieTitles.push(element.title);
      this.imagesArray.push(`https://image.tmdb.org/t/p/original/${element.backdrop_path}`);
      this.overviewArray.push(element.overview);    
      this.ratingArray.push(element.vote_average)
     })
    });   
  }
  onSearch() {
    this.navCtrl.push(SearchPage);
  }
}
