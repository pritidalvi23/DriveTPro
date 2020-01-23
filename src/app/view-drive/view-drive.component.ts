import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-view-drive',
  templateUrl: './view-drive.component.html',
  styleUrls: ['./view-drive.component.css']
})
export class ViewDriveComponent implements OnInit {

  constructor(private s:DemoService) { }
  
  data:any[]=[];
  ngOnInit() {
    this.user();
   
  }
  editData(){

  }
 
  deleteData(x){

    this.s.data(x).subscribe((e:any)=>{
      this.user();
    });
    // console.log(x);

  }
  emp:any[];

  user(){
    this.s.viewData().subscribe((e:any)=>this.data=e);
    
  }
}
