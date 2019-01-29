import { AgmCoreModule } from '@agm/core';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Config } from '../config';

import { ComponentsModule } from '../pages/components/components.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { HomeModule } from '../pages/home/home.module';
import { SlideBoxModule } from '../pages/slide-box/slide-box.module';

import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { SignupPage } from '../pages/signup/signup';
import { InformacionUsuarioPageModule } from '../pages/informacion-usuario/informacion-usuario.module';
import { AcercaDePageModule } from '../pages/acerca-de/acerca-de.module';
import { HttpClientModule } from '@angular/common/http';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { Geolocation } from '@ionic-native/geolocation';




@NgModule({
	declarations: [
		MyApp,
		LoginPage,
		SignupPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot(),
		AngularFireModule.initializeApp(firebaseConfig.fire,'proyecto-web-final'),
		AngularFireDatabaseModule,
		
		AngularFireAuthModule,
		ComponentsModule,
		NgxErrorsModule,
		GoogleMapsModule,
		HomeModule,
		SlideBoxModule,
		WordpressModule,
		InformacionUsuarioPageModule,
		AcercaDePageModule,
		

		
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		LoginPage,
		SignupPage
	],
	providers: [
		Config,
		StatusBar,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		AuthService,
		HttpClientModule,
		AngularFireAuth,
		Geolocation
		
		
	
	]
})
export class AppModule {
}
