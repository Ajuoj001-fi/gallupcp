import { AuthService } from './auth.service';
import { CanActivateRouteService } from './can-activate-route.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { LoggedComponent } from './logged/logged.component';
import { NewComponent } from './new/new.component';

const route : Routes = [{
  path : "",
  component : HomeComponent
},{
  path : "new",
  component : NewComponent,
  
},{
  path : "logged",
  component : LoggedComponent,
  canActivate : [CanActivateRouteService]
},{
  path : "questions",
  component : QuestionComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    LoggedComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule,
  ],
  providers: [CookieService, CanActivateRouteService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
