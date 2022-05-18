import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IService } from 'src/app/interfaces/service';
import { AdminHomeService } from './admin-home.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit, OnDestroy {

  service: IService = {};
  services: IService[] = [];
  createSubscription!: Subscription;
  findSubscription!: Subscription;

  constructor(private adminService: AdminHomeService) { }

  ngOnInit(): void {
  }

  createService(){
    this.createSubscription = this.adminService.createService(this.service).subscribe({
      next: (res) => {
        console.log(res);
        this.findAllService();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  findAllService(){
    if(this.services){
      this.findSubscription = this.adminService.findAllService().subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  ngOnDestroy(): void {
      this.createSubscription.unsubscribe();
      this.findSubscription.unsubscribe();
  }

}
