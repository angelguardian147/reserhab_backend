import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarSearchComponent } from './bar-search.component';
import { DatepickerComponent } from './datepicker/datepicker.component';



@NgModule({
  declarations: [BarSearchComponent, DatepickerComponent],
  imports: [
    CommonModule
  ]
})
export class BarSearchModule { }
