import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  employeeform!:FormGroup;
data!:datamodel[];
  constructor (private formbuilder:FormBuilder,private api:ApiService){}
ngOnInit(): void{
this.employeeform=this.formbuilder.group({
  name:['',Validators.required],
  email:['',Validators.required],
city:['',Validators.required],
pincode:['',Validators.required],
mobilenumber:['',Validators.required]
})

 this.getemployee();
}
addemployee(data:any){
// console.log(data);
this.api.addemployee(data).subscribe((res=>{
  this.employeeform.reset();

}))
 this.getemployee();

}
// getemployee
getemployee(){
  this.api.getemployee().subscribe(res=>{
    this.data= res;
  })
}
  delete(id:number){
this.api.deleteemployee(id).subscribe(()=>{
  
})
  }
}


 

