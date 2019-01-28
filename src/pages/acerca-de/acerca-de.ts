import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Generated class for the AcercaDePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acerca-de',
  templateUrl: 'acerca-de.html',
})
export class AcercaDePage {

  private nav: Nav;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    nav: Nav) {
      this.nav = nav;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcercaDePage');
  }
}
