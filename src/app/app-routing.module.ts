import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component'
import {LandingComponent} from './landing/landing.component';
import {HoodComponent} from './hood/hood.component'

const routes: Routes = [
  {path:'', component : RegisterComponent},
  { path:'login',component: LoginComponent},
  { path:'landing',component: LandingComponent},
  { path:'hood',component: HoodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
