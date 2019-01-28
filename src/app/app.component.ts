import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { ComponentsListPage } from '../pages/components/list/components.list.page';
import { GoogleMapsPage } from '../pages/google-maps/google-maps.page';
import { HomePage } from '../pages/home/home.page';
import { SlideBoxPage } from '../pages/slide-box/slide-box.page';

import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { ServiciosPage } from '../pages/servicios/servicios';
import { InformacionUsuarioPage } from '../pages/informacion-usuario/informacion-usuario';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	pages;
	rootPage;

	private app;
	private platform;
	private menu: MenuController;

	@ViewChild(Nav) nav: Nav;

	constructor(app: App, platform: Platform,
		menu: MenuController,
		private statusBar: StatusBar,
		private auth: AuthService) {
		this.menu = menu;
		this.app = app;
		this.platform = platform;
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Home', component: HomePage, icon: 'home' },
			{ title: 'Servicios', component: ServiciosPage, icon: 'build' },
			{ title: 'Novedades', component: SlideBoxPage, icon: 'help-circle' },
			{ title: 'Ubicación', component: GoogleMapsPage, icon: 'map' },
			{ title: 'Informacion Personal', component: InformacionUsuarioPage, icon: 'finger-print' },
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
