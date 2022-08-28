import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-request',
  templateUrl: './admin-request.component.html',
  styleUrls: ['./admin-request.component.css']
})
export class AdminRequestComponent implements OnInit {

  UserData: any={
    email:"",
        
  };

  CReq : any= null  ;

  constructor(private userservice:UserService, private http: HttpClient) { }

  ngOnInit(): void {

    this.userservice.FindRequest(this.UserData).subscribe(
      (data)=> {
        console.log(data);
        if(data==null)
        {
          alert('Null value occured...');
        }
        else {
          this.CReq=data;
          console.log("Emails:")
          console.log(this.CReq.email+"--------> data")
          
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


