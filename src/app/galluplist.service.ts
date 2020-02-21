import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gallup } from './Gallup';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GalluplistService {

  gallups : Gallup[];

  constructor(private http : HttpClient, private auth : AuthService, private cookieService : CookieService, private router : Router) { }

  getAllQuestions = () : void => {
    this.http.get('https://gallup.herokuapp.com/allquestions').subscribe((data : any) => {
      this.gallups = [];
      Object.keys(data).forEach((row) => {
        let newGallup : Gallup = {
                                  "id" : data[row].gallup_id,
                                  "active" : data[row].active,
                                  "question" : data[row].question,
                                  "startDate" : data[row].start_date,
                                  "endDate" : data[row].end_date,
                                  "answer1" : data[row].answer1,
                                  "answer2" : data[row].answer2,
                                  "answer3" : data[row].answer3
                                  }
        this.gallups.push(newGallup);
      });
    });
  }

  deleteQuestion = (id) : void => {
    this.http.post<JSON>('https://gallup.herokuapp.com/delete', {
                                                                'id' : id, 
                                                                'user' : this.cookieService.get('user'),
                                                                'code' : this.auth.code
                                                                }).subscribe(data => {

                                                                  this.getAllQuestions();
    }); 
    
  }

  addNew = (question,ans1,ans2,ans3,startDate,endDate,active) : any => {
    console.log(question,ans1,ans2,ans3,startDate,endDate,active);
    this.http.post<JSON>('https://gallup.herokuapp.com/addnew', {
      
                                                                'user' : this.cookieService.get('user'),
                                                                'code' : this.auth.code,
                                                                'question' : question,
                                                                'answer1' : ans1,
                                                                'answer2' : ans2,
                                                                'answer3' : ans3,
                                                                'startDate' : startDate,
                                                                'endDate' : endDate,
                                                                'active' : active,
                                                                }).subscribe(data => {
       return data;
    });
  }

  changeActive = (newId) : any => {
        this.http.post<JSON>('https://gallup.herokuapp.com/setnewactive', {
          'user' : this.cookieService.get('user'),
          'code' : this.auth.code,
          'id' : newId
          }).subscribe(data => {
        this.getAllQuestions();
        return data;
    });
  }
}
