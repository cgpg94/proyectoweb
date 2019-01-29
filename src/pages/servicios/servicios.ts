import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosDataProvider } from '../../providers/servicios-data/servicios-data';
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

  serviciosD: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public serviciosData: ServiciosDataProvider
   ) {

   }
   objectKeys (objeto: any) {
    const keys = Object.keys(objeto);
    console.log(keys); // echa un vistazo por consola para que veas lo que hace "Object.keys"
    return keys;
 }
   ionViewDidLoad( ){
    this.serviciosData.getRemoteData().subscribe(
      (data) => { 
        this.serviciosD = data['servicio1'];
        console.log( this.serviciosD);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  

}
