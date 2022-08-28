import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //constructor() { }
  constructor(private userservice: UserService) { }

  public user = {
    email: '',
    password: '',
    phone: '',
    name: '',
  };

  ngOnInit(): void {
  }

  signup_submit() {
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
    
    this.userservice.addUser(this.user).subscribe(
      (data)=> {
        console.log(data);
        if(data==null)
        {
          alert('Null value occured...');
        }
        else
        {
          alert("Successfully logged in...");
        window.location.href='http://localhost:4200/login' }

      },
      (error)=> {
        console.log(error);
        alert("Failed...., check again.");

      }

    )
  }

}
