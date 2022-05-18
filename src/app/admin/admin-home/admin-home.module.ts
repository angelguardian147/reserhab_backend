import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home.component';
import { AdminHomeService } from './admin-home.service';



@NgModule({
  declarations: [AdminHomeComponent],
  imports: [
    CommonModule
  ],
  providers: [AdminHomeService]
})
export class AdminHomeModule { }
