import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HomeData, ReqhomeData } from './home.interface';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = environment.apiurl;
  constructor(private httpClient:HttpClient) { }
    public postHome(req:ReqhomeData): Observable<any>{
      
    return  this.httpClient.post(this.url+'home.php',req);
  }
}