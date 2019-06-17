import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { MaterialModule } from '../shared/material Module/material/material.module';
import { JobSeekersComponent } from './job-seekers.component';
import { JobSeekerRoutingModule } from './job-seeker-routing.module';
import { JobSearchPipe } from './job-search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    AppliedJobsComponent,
    ProfileComponent,
    SearchJobComponent,
    JobSeekersComponent,
    JobSearchPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    JobSeekerRoutingModule,
    FormsModule
  ],
  exports:[
    SearchJobComponent,
    JobSeekersComponent,
  ]
})
export class JobSeekersModule { }
