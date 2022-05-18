import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserverComponent } from './reserver.component';
import { ReserverService } from './reserver.service';



@NgModule({
  declarations: [ReserverComponent],
  imports: [
    CommonModule
  ],
  providers: [ReserverService]
})
export class ReserverModule { }
