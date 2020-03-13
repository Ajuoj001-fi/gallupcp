import { GalluplistService } from './../galluplist.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private http : HttpClient, private cookieService : CookieService, private auth : AuthService, private gallup : GalluplistService) {
    this.cookieService.deleteAll();
    this.cookieService.set('gallupcp-access',null,1,'/','miettii.net',false,'Lax');
    this.cookieService.set('user',null,1,'/','miettii.net',false,'Lax');
    console.log(this.cookieService.getAll());
  }

  ngOnInit() {
    
  }

  user : string;
  pass : string;

  login = () : void => {

    this.http.post<any>('https://gallup.herokuapp.com/login', { 'user' : this.user, 'pass' : this.pass }).subscribe((data) => {
        this.cookieService.set('gallupcp-access',data.code,1,'/','miettii.net',false,'Lax');
        this.cookieService.set('user',this.user,1,'/','miettii.net',false,'Lax');
        this.gallup.getAllQuestions();
        this.auth.code = data.code;
        this.router.navigate(["/logged"]);
    },(err) => {
      console.log(this.user, this.pass);
      console.log("login error");
    });
  }

}
