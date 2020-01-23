import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl,Validators} from '@angular/forms'; 
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  
userform:FormGroup;
 
  countries = ['India','USA', 'Germany', 'Italy', 'France'];

   

  constructor(private temp:DemoService) { }

  ngOnInit() 
    {
      this.userform=new FormGroup(
     
   {
        name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      
    pass:new FormControl('',[Validators.required,Validators.minLength(5)]),
       
   mail:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),
     
     gender:new FormControl(),
        country: new FormControl(),
        mobile: new FormControl('',[Validators.required]),
      });
   
   }
   tpo;
   adddata(){
     this.temp.setreg(this.userform.value).subscribe(e=>this.tpo=e);
     alert("Data submitted");

   }
    
  

}
