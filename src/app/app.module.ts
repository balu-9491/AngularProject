import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { ApiService } from './api.service';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    RegistrationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    HttpClientModule,FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
