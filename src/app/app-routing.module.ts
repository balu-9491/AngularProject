import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  { path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'home',component:HomeComponent},
  {path:'child/:id',component:ChildComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'parent', component:ParentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
