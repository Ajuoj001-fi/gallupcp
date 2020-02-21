import { GalluplistService } from './../galluplist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(public gallup : GalluplistService) { }

  ngOnInit() {
    this.gallup.getAllQuestions();
  }
}
