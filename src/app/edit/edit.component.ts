import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private a:ActivatedRoute,private s:DemoService) { }
  emp:any[];
  i;
  tpobj:any={};
  ngOnInit() 
  {
    this.i=this.a.snapshot.params['id'];
    this.s.viewData().subscribe((e:any)=>{
      this.emp=e

      for(let i=0;i<this.emp.length;i++)
      {
        if(this.emp[i].d_id==this.i)
        {
           this.tpobj=this.emp[i];
           break;
        } 
      }
      
    });
      }
      data;
      updatedata(){
        
      this.s.update(this.tpobj).subscribe(e=>this.data=e);
        console.log("data updated");
        console.log(this.tpobj);
        
      }
      
      
      }
  





