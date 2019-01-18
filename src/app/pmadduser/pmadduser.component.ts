import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pmadduser',
  templateUrl: './pmadduser.component.html',
  styleUrls: ['./pmadduser.component.scss']
})
export class PmadduserComponent implements OnInit {

  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get('http://localhost:8099/students/10').subscribe(data => {
      console.log(data);
    });
  }
  addUser(){
  console.log("in add user");
  //back end call to add user
  this.http.get('http://localhost:8099/students/10').subscribe(data => {
    console.log(data);
  });
}
}
