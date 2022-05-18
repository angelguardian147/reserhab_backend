import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddaccountComponent } from './addaccount.component';
import { AddaccountService } from './addaccount.service';



@NgModule({
  declarations: [AddaccountComponent],
  imports: [
    CommonModule
  ],
  providers: [AddaccountService]
})
export class AddaccountModule { }
