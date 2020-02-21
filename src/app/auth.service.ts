import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService{

  constructor(private http : HttpClient, private cookieService : CookieService) { }
  code : string = "";

  checkAuth = () : boolean => {
    if(this.code == ""){
      return false;
    }
    return true ? this.cookieService.get('gallupcp-access') == this.code : false;

  }
}
