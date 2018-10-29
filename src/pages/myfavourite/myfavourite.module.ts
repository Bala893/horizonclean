import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyfavouritePage } from './myfavourite';

@NgModule({
  declarations: [
    MyfavouritePage,
  ],
  imports: [
    IonicPageModule.forChild(MyfavouritePage),
  ],
})
export class MyfavouritePageModule {}
