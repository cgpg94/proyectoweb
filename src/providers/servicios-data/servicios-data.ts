import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ServiciosDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciosDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServiciosDataProvider Provider');
  }
  getRemoteData(){
    return this.http.get('https://proyecto-web-final.firebaseio.com/sercicios.json');
   
}


}
