import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountryService } from '../apis/country/country.service';
import { IDepartment } from '../interfaces/department';

@Component({
  selector: 'app-bar-search',
  templateUrl: './bar-search.component.html',
  styleUrls: ['./bar-search.component.scss']
})
export class BarSearchComponent implements OnInit, OnDestroy {

  departments: IDepartment[] = [];
  countrySubscription!: Subscription;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(){
    this.countrySubscription = this.countryService.getDepartments().subscribe({
      next: (res) => {
        this.departments = res;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngOnDestroy(): void {
      this.countrySubscription.unsubscribe();
  }

}
