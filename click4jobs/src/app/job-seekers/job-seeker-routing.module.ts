import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'job', component: SearchJobComponent},
  {path: 'application', component: AppliedJobsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekerRoutingModule { }
