import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class FirebaseServiceProvider{
    constructor(public db:AngularFireDatabase){
        console.log('Servidor ok');
    }

    getAll(){
        return this.db.list('servicios').valueChanges();
    }
    save(servicios:any){
        this.db.list('servicios')
        .push(servicios)
        .then(r=>console.log(r));
    }
}
