import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private ht: HttpClient) { }

  setreg(x) {
    return this.ht.post("http://localhost:8080/DriveTracker/Create", x);
  }

  viewData() {
    return this.ht.get("http://localhost:8080/DriveTracker/ViewD");
  }
  data(y){
    return this.ht.post("http://localhost:8080/DriveTracker/Deletedata",y);
  }
  update(z){
    return this.ht.post("http://localhost:8080/DriveTracker/Edit",z);
  }
}
