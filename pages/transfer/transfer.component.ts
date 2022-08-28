import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  UserData1: any={
    email:localStorage.getItem('userEmail'),
    deposit:'',
    withdraw:'',
    total:'',
    current:'',
    type:''
    
  };
 
     
  constructor(private userservice: UserService, private http: HttpClient) { }

    
  ngOnInit(): void { }
    deposit_submit() { 
      console.log(this.UserData1);
   // alert("running");
    this.userservice.Deposit(this.UserData1).subscribe(
      (data)=> {
        console.log(data);
        if(data==null)
        {
          alert('Null value occured...');
        }
        else {
          this.UserData1=data;
          console.log(this.UserData1.total+"-------->logged in data")
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


    Withdraw_submit() { 
      console.log(this.UserData1);
   // alert("running");
    this.userservice.withdraw(this.UserData1).subscribe(
      (data)=> {
        console.log(data);
        if(data==null)
        {
          alert('Null value occured...');
        }
        else {
          this.UserData1=data;
          console.log(this.UserData1.total+"-------->logged in data")
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


