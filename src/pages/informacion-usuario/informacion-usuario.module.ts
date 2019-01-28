import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformacionUsuarioPage } from './informacion-usuario';

@NgModule({
  declarations: [
    InformacionUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(InformacionUsuarioPage),
  ],
})
export class InformacionUsuarioPageModule {}
