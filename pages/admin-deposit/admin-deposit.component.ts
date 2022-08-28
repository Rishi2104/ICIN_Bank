import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-deposit',
  templateUrl: './admin-deposit.component.html',
  styleUrls: ['./admin-deposit.component.css']
})
export class AdminDepositComponent implements OnInit {

  UserData1: any={
    email:"",
        
  };

  constructor(private userservice:UserService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  
  adminDeposit_submit() { 
    console.log(this.UserData1);
    console.log(localStorage.setItem('userEmail',this.UserData1.email));
    window.location.href='http://localhost:4200/transfer';
 // alert("running");
  
 
}
}
