import { useAnimation } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  UserData: any={

    email:localStorage.getItem('userEmail'),
    deposit:'',
    withdraw:'',
    total:'',
    current:'',
    type:'',
    name:'',
    phone:''    
  };
 
     
  constructor(private userservice: UserService, private http: HttpClient) { }

    
  ngOnInit(): void {
   // alert("running");
    this.userservice.FindTotal(this.UserData).subscribe(
      (data)=> {
        console.log(data);
        if(data==null)
        {
          alert('Null value occured...');
        }
        else {
          this.UserData=data;
          console.log(this.UserData.total+"-------->logged in data")
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
