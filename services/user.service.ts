import { HttpClient } from '@angular/common/http';
import {enableProdMode} from '@angular/core';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../pages/login/login.component';
import baseurl from './helper';

enableProdMode();
@Injectable({
  providedIn: 'root'
})
export class UserService {
   
  userEm: any;
  

  constructor(private http: HttpClient) { }


public loginUser(user: any)
{
  localStorage.setItem('userEmail',user.email);
  return this.http.post(`${baseurl}/Controller/login/`,user);
  
}

public addUser(user: any)
{
 return this.http.post(`${baseurl}/Controller/register/`,user);
}

public requestC(user: any)
{
  this.userEm=localStorage.getItem('userEmail');
 return this.http.post(`${baseurl}/Controller/request/`,user);
}


public FindTotal(user: any)
{
  this.userEm=localStorage.getItem('userEmail');
  console.log(this.userEm);
 return this.http.post(`${baseurl}/Controller/transaction/`,user);

}
public FindProfile(user: any)
{
  this.userEm=localStorage.getItem('userEmail');
  console.log(this.userEm);
 return this.http.post(`${baseurl}/Controller/profile/`,user);

}

public Deposit(user: any)
{
  this.userEm=localStorage.getItem('userEmail');
  console.log(this.userEm);
 return this.http.post(`${baseurl}/Controller/deposit/`,user);

}


public withdraw(user: any)
{
  this.userEm=localStorage.getItem('userEmail');
  console.log(this.userEm);
 return this.http.post(`${baseurl}/Controller/withdraw/`,user);

}

public FindRequest(user: any)
{
 return this.http.post(`${baseurl}/Controller/ad-request/`,user);
}

}
