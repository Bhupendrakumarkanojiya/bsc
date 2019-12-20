import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getCurrentWeather(){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=bangalore,India&APPID=03d358cfa4992aeeff792b78f7930119');
  }
}

@Injectable()
export class PrintMyName{
  getName(){
    return "my name is lakhan";
  }
}
