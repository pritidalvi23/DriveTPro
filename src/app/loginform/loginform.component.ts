import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  registerForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.registerForm=new FormGroup(
      {
       email :new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),
       password:new FormControl('',[Validators.required]),
      }
    );
  }

}
