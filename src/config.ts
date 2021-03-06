import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'https://proyecto-web-final.firebaseio.com/todoslosservicios.json';

	public userApiUrl = 'https://proyecto-web-final.firebaseio.com/usuarios.json';
}
	

export const firebaseConfig = {
	fire: {
		apiKey: "AIzaSyAK4u-fpbWgJ-fAl7MuBS0iEyyol0W3GJY",
		authDomain: "proyecto-web-final.firebaseapp.com",
		databaseURL: "https://proyecto-web-final.firebaseio.com",
		projectId: "proyecto-web-final",
		storageBucket: "proyecto-web-final.appspot.com",
		messagingSenderId: "805545827583"
	}
};
