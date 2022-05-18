import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  BASE_URL: string = '';

  constructor(private http: HttpClient) { }

  

}
