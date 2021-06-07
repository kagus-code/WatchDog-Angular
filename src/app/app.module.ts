import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ShowProfileComponent } from './profile/show-profile/show-profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { SharedService } from './shared.service';
import { LandingComponent } from './landing/landing.component';
import { HoodComponent } from './hood/hood.component';
import { BusinessComponent } from './business/business.component';
import { AddBuinessComponent } from './business/add-buiness/add-buiness.component';
import { EditBuinessComponent } from './business/edit-buiness/edit-buiness.component';
import { PostComponent } from './post/post.component';
import { ShowPostComponent } from './landing/show-post/show-post.component';
import { AddEditPostComponent } from './landing/add-edit-post/add-edit-post.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ShowProfileComponent,
    EditProfileComponent,
    LandingComponent,
    HoodComponent,
    BusinessComponent,
    AddBuinessComponent,
    EditBuinessComponent,
    PostComponent,
    ShowPostComponent,
    AddEditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
