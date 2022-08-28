import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  UserData: any={

    email:localStorage.getItem('userEmail'),
    name:'',
    phone:'',
    type:''
    
  };
 
     
  constructor(private userservice: UserService, private http: HttpClient) { }

    
  ngOnInit(): void {
   // alert("running");
    this.userservice.FindProfile(this.UserData).subscribe(
      (data)=> {
        console.log(data);
        if(data==null)
        {
          alert('Null value occured...');
        }
        else {
          this.UserData=data;
          console.log(this.UserData.total+"-------->logged in data")
        //  alert("successfully logged in");
          console.log(this.UserData.phone);
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