import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IAccount } from 'src/app/interfaces/account';
import { JwtResponse } from 'src/app/interfaces/jwt-response';
import { IRole } from 'src/app/interfaces/role';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AddaccountService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient,
              private loginService: LoginService) { }

  create(account: IAccount): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(`${this.BASE_URL}/account/create`, account).pipe(
      tap(
        (res: JwtResponse) => {
          if(res && res.access_token){
            this.loginService.setToken(res.access_token);
          }
        },
        (error) => {
          error
        }
      )
    );
  }

  getRole(name: string): Observable<IRole>{
    return this.http.get<IRole>(`${this.BASE_URL}/role/${name}`);
  }

}
