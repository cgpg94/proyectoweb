import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';

import {  AngularFireDatabase, AngularFireObject } from "angularfire2/database"; 

/**
 * Generated class for the ServiciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicios',
  templateUrl: 'servicios.html',
})
export class ServiciosPage {
  
  public  servicios$;
  arraydatos;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase) {
    this.servicios$ = this.database.list('servicios').valueChanges();
    if(this.servicios$)
    {
      Object.keys(this.servicios$).forEach(function(key) {
        
        this.arraydatos.push(this.values[key]);
});
    }
  }
  

}
