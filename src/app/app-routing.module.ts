import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionListingComponent } from './components/question-listing/question-listing.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { CandidateListingComponent } from './components/candidate-listing/candidate-listing.component';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [LoginGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [LoginGuard]
  },
  {
    path: 'questions',
    component: QuestionListingComponent,
    // canActivate: [RegistrationGuard]
  },
  {
    path: 'add-question',
    component: AddQuestionComponent,
    // canActivate: [RegistrationGuard]
  },
  {
    path: 'candidates',
    component: CandidateListingComponent,
    // canActivate: [RegistrationGuard]
  },
  {
    path: 'add-candidate',
    component: AddCandidateComponent,
    // canActivate: [RegistrationGuard]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
