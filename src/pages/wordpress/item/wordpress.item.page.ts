import { Component } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Post } from '../models/post.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../../../services/auth.service';

@Component({
	templateUrl: 'wordpress.item.html'
})
export class WordpressItemPage {
	post: Post;
	tasksRef: AngularFireList<any>;

	constructor(navParams: NavParams,public alertCtrl: AlertController, public database: AngularFireDatabase,	private auth: AuthService) {
		this.post = <Post>navParams.get('item');
		this.tasksRef = this.database.list('pedidos');
    	auth;
	}


	pedirservicio(codi,titu,descrici,val,usuar,telefono) {
		let prompt = this.alertCtrl.create({
			title: 'Datos para la visita',
			inputs: [
				{
					name: 'direccion',
					placeholder: 'Direccion'
				},
				{
					name: 'telefono',
					placeholder: 'Teléfono'
				},
			],
			buttons: [
				{
					text: 'Cancel',
					handler: data => {
						
						console.log('Cancel clicked');
					}
				},
				{
					text: 'Pedir servicio',
					handler: data => {
						this.tasksRef.push({
							codigo:codi,
							titulo:titu,
							descripcion:descrici,
							valor:val,
							usuario:usuar,
							numerotelefono:telefono,
							direccion: data.direccion,
							telefono: data.telefono
							
						});
					}
				}
			]
		});
		prompt.present();
	}
}
