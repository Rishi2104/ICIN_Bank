import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

 //constructor() { }
 constructor(private userservice: UserService, private http:HttpClient) { }

 public userData: any = {
   email: localStorage.getItem('userEmail')   
 };

 ngOnInit(): void {
 

   // alert("running");
   this.userservice.requestC(this.userData).subscribe(
    (data)=> {
      console.log(data);
      this.userData=data;
      if(data==null)
      {
        alert('Null value occured...');
      }
      else if(this.userData.email=="AlreadyExists") {
        alert("already requested");
        window.location.href='http://localhost:4200/dashboard'
      }
      else {
        this.userData=data;
        console.log(this.userData+"-------->logged in data")
       // alert("successfully logged in");
        //window.location.href='http://localhost:4200/register'
      // alert("Successfully logged in...");
      
      }

    },
    (error)=> {
      console.log(error);
      alert("Failed...., check again.");

    }

  )




 }

}