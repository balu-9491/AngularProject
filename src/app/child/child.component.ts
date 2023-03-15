import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../login/model';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  public dataid!:number;
  public employee!:datamodel;
  router:any
constructor(private activatedroute:ActivatedRoute,router:Router,private api: ApiService){}
ngOnInit():void{
  this.activatedroute.paramMap.subscribe((param:Params)=>{
this.dataid=param['get']("id");
  })
  this.api.fetchdata(this.dataid).subscribe((data:datamodel)=>{
this.employee=data;
  })
}
update(){
  this.api.updateemployee(this.employee,this.dataid).subscribe((res:datamodel)=>{
    this.router.navigate(["/"])
  })
}
}
