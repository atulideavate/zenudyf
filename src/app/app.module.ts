import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import {APP_BASE_HREF} from '@angular/common'; // Please remove this after your all path will be fixed .. this is used to resolve iamge path releted erros
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// COMPONENTS 
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionListingComponent } from './components/question-listing/question-listing.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { CandidateListingComponent } from './components/candidate-listing/candidate-listing.component';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';
import { HeaderComponent } from './components/sub-components/header/header.component';
import { InnerPageHeaderComponent } from './components/sub-components/inner-page-header/inner-page-header.component';
import { FooterComponent } from './components/sub-components/footer/footer.component';

// SERVICES
import { HelperService } from "./services/helper.service";
import { AuthService } from "./services/auth.service";
import { CandidateService } from "./services/candidate.service";
import { QuestionService } from "./services/question.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuestionListingComponent,
    AddQuestionComponent,
    CandidateListingComponent,
    AddCandidateComponent,
    HeaderComponent,
    InnerPageHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    HelperService,
    AuthService,
    CandidateService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
