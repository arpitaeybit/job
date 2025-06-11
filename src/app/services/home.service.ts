import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 constructor(private http:HttpClient){}

  getalljob(){
    return this.http.get('https://remotive.com/api/remote-jobs?limit=100')
  }
}
