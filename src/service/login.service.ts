import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginData } from './login.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.apiurl;
  constructor(private httpClient:HttpClient) { }
    public postLogin(req:LoginData): Observable<any>{
      
    return  this.httpClient.post(this.url+'login.php',req);
  }
}
