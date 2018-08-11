import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

getData(movie) {
  console.log('getData()1', movie);
  if(movie !== undefined) {
  console.log('user.getData()')
  return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=0520d49060a9a8438b0fa54ee6d83bc0&language=en-US&query='+ movie + '&page=1&include_adult=false')
  } else {
  return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=0520d49060a9a8438b0fa54ee6d83bc0&language=en-US&query=action&page=1&include_adult=false')
  }
}


}
