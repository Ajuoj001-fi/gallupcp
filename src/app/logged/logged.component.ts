import { AuthService } from './../auth.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  constructor(private router : Router, public auth : AuthService,private http : HttpClient, private cookieService : CookieService) {  }

  ngOnInit() {
  }

}
