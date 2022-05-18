import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from 'src/app/interfaces/department';
import { IMunicipality } from 'src/app/interfaces/municipality';
import { IRegion } from 'src/app/interfaces/region';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  BASE_URL = 'https://www.datos.gov.co/resource/xdk5-pm3f.json?';
  token: string = 'Tx274HxZbP7PrSGrLq2eK0uat';

  constructor(private http: HttpClient) { }

  getAllRegions(): Observable<IRegion[]>{
    const query = '$select=region&$group=region';
    return this.http.get<IRegion[]>(`${this.BASE_URL}${query}`,
      {'headers': new HttpHeaders({'Content-Type': 'application/json', 'X-App-Token': `${this.token}`})});
  }

  getDepartments(): Observable<IDepartment[]>{
    const query = '$select=departamento&$group=departamento';
    return this.http.get<IDepartment[]>(`${this.BASE_URL}${query}`,
      {'headers': new HttpHeaders({'Content-Type': 'application/json', 'X-App-Token': `${this.token}`})});
  }

  getAllDepartmentByRegion(region: string): Observable<IDepartment[]>{
    const query = `$select=departamento&$group=departamento&region=${region}`;
    return this.http.get<IDepartment[]>(`${this.BASE_URL}${query}`,
      {'headers': new HttpHeaders({'Content-Type': 'application/json', 'X-App-Token': `${this.token}`})});
  }

  getAllMunicipalityByDepartment(department: string): Observable<IMunicipality[]>{
    const query = `$select=municipio&$group=municipio&departamento=${department}`;
    return this.http.get<IMunicipality[]>(`${this.BASE_URL}${query}`,
      {'headers': new HttpHeaders({'Content-Type': 'application/json', 'X-App-Token': `${this.token}`})});
  }

}
