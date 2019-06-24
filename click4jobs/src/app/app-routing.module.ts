import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { ImageSliderComponent } from './shared/components/image-slider/image-slider.component';

const routes: Routes = [
    {path: '', redirectTo: 'slider', pathMatch: 'full'},
    {path: 'slider', component: ImageSliderComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'jobSeeker', loadChildren: './job-seekers/job-seekers.module#JobSeekersModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
