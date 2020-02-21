import { GalluplistService } from './../galluplist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  new = {
    question : "",
    ans1 : "",
    ans2 : "",
    ans3 : null,
    startDate : "0000-00-00",
    endDate : "0000-00-00",
    active : false,
  }

  constructor(private galluplist : GalluplistService) { }

  ngOnInit() {
  }

  aseta = () : void => {
    this.galluplist.addNew(this.new.question,this.new.ans1,this.new.ans2,this.new.ans3,this.new.startDate,this.new.endDate,this.new.active);
  }

}
