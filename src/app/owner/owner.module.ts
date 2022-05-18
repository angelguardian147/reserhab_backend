import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerComponent } from './owner.component';
import { OwnerService } from './owner.service';



@NgModule({
  declarations: [OwnerComponent],
  imports: [
    CommonModule
  ],
  providers: [OwnerService]
})
export class OwnerModule { }
