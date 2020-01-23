import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators}from '@angular/forms'
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-create-drive',
  templateUrl: './create-drive.component.html',
  styleUrls: ['./create-drive.component.css']
})
export class CreateDriveComponent implements OnInit {
  createdrive:FormGroup;
  constructor(private temp1:DemoService) { }

  ngOnInit() {
    this.createdrive=new FormGroup(
      {
        company_Name: new FormControl('',[Validators.required]),
        resources: new FormControl('',[Validators.required]),
        experience: new FormControl('',[Validators.required]),
        ctc: new FormControl('',[Validators.required]),
        bond: new FormControl('',[Validators.required]),
        followup: new FormControl('',[Validators.required]),
        educationc:new FormControl('',[Validators.required]),
        position:new FormControl('',[Validators.required]),
        joiningc:new FormControl('',[Validators.required]),
      }

    );
  }
//onAdd(){
  //alert("Successfully Added");
//}
tpo;
adddata(){
  this.temp1.setreg(this. createdrive.value).subscribe(e=>this.tpo=e);
  alert("Data submitted");

}
}
