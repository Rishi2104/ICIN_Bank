import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice: UserService) { }

  public user: any = {
    email: '',
    password: '',
    phone:'',
    name:'',
    type:''
  };

  ngOnInit(): void {
  }
  signin_submit() {
    if(this.user.email==null || this.user.email=='')
    {
    alert('Watch out, email field cannot be blanked');
    return;
    }
    if(this.user.password==null || this.user.password=='')
    {
      alert('Watch out, password field cannot be blanked');
      return;
    }
    
    this.userservice.loginUser(this.user).subscribe(
      (data)=> {
        console.log(data);
        if(data==null)
        {
          alert('Null value occured...');
        }
        else {
          this.user=data;
          console.log(this.user.type)
                    alert("successfully logged in"); 
          if(this.user.type=='user')                   
          window.location.href='http://localhost:4200/dashboard'
          else
          window.location.href='http://localhost:4200/admin'
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
