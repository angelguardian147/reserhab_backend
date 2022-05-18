import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { JwtResponse } from 'src/app/interfaces/jwt-response';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient,
              private cookie: CookieService,
              private router: Router) { }

  login(username: string, password: string): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.BASE_URL}/auth/login`, { username, password }).pipe(
      tap(
        (res: JwtResponse) => {
          console.log(res)
          if (res && res.access_token) {
            this.setToken(res.access_token);
          }
        },
        (err) => {
          err
        }
      )
    );
  }

  confirmUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(`${this.BASE_URL}/auth/confirmUser`, user).pipe(
      tap(
        (res: IUser) => {
          res
        },
        (err) => {
          err
        }
      )
    );
  }

  profile(): Observable<JwtResponse> {
    return this.http.get<JwtResponse>(`${this.BASE_URL}/auth/profile`,
      { 'headers': new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` }) });
  }

  isAuthenticated(role: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.BASE_URL}/auth/authenticated/${role}`,
      { 'headers': new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` }) });
  }

  setToken(token: string) {
    this.cookie.set('token', token);
  }

  getToken(): string {
    return this.cookie.get('token');
  }

  setPage(res: JwtResponse) {
    
    if(res.role){
      
      switch (res.role[0].name) {

        case 'propietario':
          this.router.navigate(['/owner']);
          break;
  
        case 'reservador':
          this.router.navigate(['/reserver']);
          break;
  
        case 'administrador':
          this.router.navigate(['/admin']);
          break;
  
        default:
          console.log('Acceso invalido');
          this.router.navigate(['/']);
  
      }

    }

  }

  logOut() {
    this.cookie.delete('token');
  }

}
