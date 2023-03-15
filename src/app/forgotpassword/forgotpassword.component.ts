import { Component } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {

  show=false;
  openpopup(){
    this.show=true;
  }
  closepopup(){
    this.show=false;
  }
  closeoverlay(e:any){
    if(e.target.classList.contains('overlay')){
      this.show=false
    }
  }
   States= [
    {
      id: 1,
      name:'Telangana',
      code: 'TS'
    },
    {
      id: 2,
      name:'Andhra Pradesh',
      code: 'AP'
    },
    {
      id: 3,
      name:'TamilNadu',
      code: 'TN'
    },
    {
      id: 4,
      name:'Karnataka',
      code: 'KA'
    }
  ]
  districts=[
    {
      id: 1,
      name:'nizamabad',
      s_id:1 
   
    },
    {
      id:2,
      name: 'karimnagar',
      s_id:1

    },
    {
      id:3,
      name: 'kamarredy',
      s_id:1

    },
    {
      id:4,
      name: 'adilabad',
      s_id:1

    },
    {
      id:5,
      name: 'vizag',
      s_id:2

    },
    {
      id:6,
      name: 'guntur',
      s_id:2

    },
    {
      id:7,
      name: 'nelluru',
      s_id:2

    },
    {
      id:8,
      name: 'vishakapatnem',
      s_id:2

    },
    {
      id:9,
      name: 'Ariyalur',
      s_id:3

    },
    {
      id:10,
      name: 'Chennai',
      s_id:3

    },
    {
      id:11,
      name: 'Coimbatore',
      s_id:3

    },
    {
      id:12,
      name: 'Cuddalore',
      s_id:3

    },
    {
      id:13,
      name: 'Hebbala ',
      s_id:4

    },
    {
      id:14,
      name: 'Kengeri ',
      s_id:4

    },
    {
      id:15,
      name: 'Yelahanka ',
      s_id:4

    },
    {
      id:16,
      name: 'Krishnarajapura ',
      s_id:4

    }
  ]

  filteredDistricts= this.districts;
  updateDistricts(e:any){
    let sId=e.target.value
  this.filteredDistricts=this.districts.filter((d)=>d['s_id']==sId)
  }
  mobiles=[
    {
      name: 'Redmi',
      price: 13500,
      ram: '16gb',
      storage: 128
    },
    {
      
      name: 'Vivo',
      price: 11500,
      ram: '8gb',
      storage: 128
    },
    {
      
      name: 'oppo',
      price: 12000,
      ram: '8gb',
      storage: 256

    },
    {
      
      name: 'Apple',
      price: 60000,
      ram: '128gb',
      storage: 256

    }
 
  ]
}
