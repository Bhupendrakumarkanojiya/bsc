import { Injectable } from '@angular/core';
import { IEmployee } from './IEmployee';
import {Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployee():Observable<IEmployee> {
    return this.http.get<IEmployee>('http://localhost:3000/employees');
  }
}
