import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../services/firebase-service';

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
  private servicios;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dbService: FirebaseServiceProvider
    ) {

      this.servicios=this.dbService.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosPage');
  }

}
