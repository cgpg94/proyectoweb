import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Email } from '../../services/email.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the InformacionUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacion-usuario',
  templateUrl: 'informacion-usuario.html',
})
export class InformacionUsuarioPage {
  myForm: FormGroup;
  tasksRef: AngularFireList<any>;
  datos: { name: any; lastName: any; email: any; dateBirth:any; telefono:any; direccion:any; gender:any;   };
  email: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public database: AngularFireDatabase,public formBuilder: FormBuilder, public auth: AuthService) {
    this.tasksRef = this.database.list('informacionUsuario');
    this.myForm = this.createMyForm();
    auth;
  }

  saveData(){
    this.datos=this.myForm.value;
   
      this.tasksRef.push({
        codigo_p:this.datos.name,
        titulo_p:this.datos.lastName,
        descripcion_p:this.datos.email,
        cumple_p:this.datos.dateBirth,
        telefono_p:this.datos.telefono,
        direccion_p:this.datos.direccion,
        sexo_p: this.datos.gender,
        
      });

 

    console.log(this.datos);
    console.log(this.datos.name);
  }
  
  private createMyForm(){

    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [ this.auth.getEmail(), Validators.required],
      dateBirth: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

}
