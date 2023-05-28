import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintFormComponent } from './components/complaint-form/complaint-form.component';
import { ProblemDescriptionFormComponent } from './components/problem-description-form/problem-description-form.component';

// const routes: Routes = [
//   { path: ':lang', component: ProblemDescriptionFormComponent },
//   { path: 'complaint-form', component: ComplaintFormComponent },
//   {
//     path: '**',
//     redirectTo: '/en',
//   },
// ];

const routes: Routes = [
  { path: '', component: ProblemDescriptionFormComponent },
  { path: 'complaint-form', component: ComplaintFormComponent },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
