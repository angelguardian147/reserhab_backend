import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { MapsService } from './maps.service';



@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule
  ],
  providers: [MapsService]
})
export class MapsModule { }
