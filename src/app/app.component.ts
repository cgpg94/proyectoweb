import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { ComponentsListPage } from '../pages/components/list/components.list.page';
import { GoogleMapsPage } from '../pages/google-maps/google-maps.page';
import { HomePage } from '../pages/home/home.page';
import { SlideBoxPage } from '../pages/slide-box/slide-box.page';

import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { WordpressListPage } from '../pages/wordpress/list/wordpress.list.page';
import { AdminPage } from '../pages/admin/admin';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	pages;
	rootPage;

	private app;
	private platform;
	private menu: MenuController;
	private men;

	@ViewChild(Nav) nav: Nav;

	constructor(app: App, platform: Platform,
		menu: MenuController,
		private statusBar: StatusBar,
		private auth: AuthService) {
		this.menu = menu;
		this.app = app;
		this.platform = platform;
		this.initializeApp();
		if(this.auth.getEmail()=="gonpina94@gmail.com"){
			this.men="{ title: 'Home Servicios', component: AdminPage, icon: 'build' }";
		}
		// set our app's pages
		this.pages = [
			{ title: 'Home', component: HomePage, icon: 'home' },
			{ title: 'Servicios', component: WordpressListPage, icon: 'build' },
			{ title: 'Novedades', component: SlideBoxPage, icon: 'help-circle' },
			{ title: 'Ubicación', component: GoogleMapsPage, icon: 'map' },
			{ title: 'Acerca de', component: AcercaDePage, icon: 'code-working'},
			{ title: 'Components', component: ComponentsListPage, icon: 'grid' },
		];
	}

	initializeApp() {
			this.platform.ready().then(() => {
				this.statusBar.styleDefault();
			});

			this.auth.afAuth.authState
				.subscribe(
					user => {
						if (user) {
							this.rootPage = HomePage;
						} else {
							this.rootPage = LoginPage;
						}
					},
					() => {
						this.rootPage = LoginPage;
					}
				);
	}

	login() {
		this.menu.close();
		this.auth.signOut();
		this.nav.setRoot(LoginPage);
	}

	logout() {
		this.menu.close();
		this.auth.signOut();
		this.nav.setRoot(HomePage);
	}

	openPage(page) {
	this.menu.close();
	this.nav.setRoot(page.component);
	}
}
