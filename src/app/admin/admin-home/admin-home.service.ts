import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtResponse } from 'src/app/interfaces/jwt-response';
import { IService } from 'src/app/interfaces/service';
import { LoginService } from 'src/app/modals/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminHomeService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient,
              private userService: LoginService) { }

    createService(service: IService): Observable<JwtResponse>{
      return this.http.post<JwtResponse>(`${this.BASE_URL}/service/create`, service,
        {'headers': new HttpHeaders({'Authorization': `Bearer ${this.userService.getToken()}`})});
    }

    findAllService(): Observable<IService[]>{
      return this.http.get<IService[]>(`${this.BASE_URL}/service/services`,
        {'headers': new HttpHeaders({'Authorization': `Bearer ${this.userService.getToken()}`})});
    }

}
