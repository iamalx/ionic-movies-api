import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { query } from '../../../node_modules/@angular/core/src/animation/dsl';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }
  adressURL: string = 'https://api.themoviedb.org/3/'
  apiKey: string = '?api_key=0520d49060a9a8438b0fa54ee6d83bc0&language=en-US&'
  isSearch: boolean;

  getData(query1) {
    if(query1 !== undefined) {
      if(this.isSearch) {
        return this.http.get(`${this.adressURL}search/movie${this.apiKey}query=`+ query1 + '&page=1&include_adult=false')
      }else {
        return this.http.get(`${this.adressURL}discover/movie${this.apiKey}sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${query1}`)
      }  
    }else {
      return this.http.get(`${this.adressURL}movie/popular${this.apiKey}page=1`)
    }
  };
}
