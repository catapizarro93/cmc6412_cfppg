import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pagina1ejemploPage } from './pagina1ejemplo';

@NgModule({
  declarations: [
    Pagina1ejemploPage,
  ],
  imports: [
    IonicPageModule.forChild(Pagina1ejemploPage),
  ],
})
export class Pagina1ejemploPageModule {}
