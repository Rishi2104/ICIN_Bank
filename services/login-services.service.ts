import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private http: HttpClient) { }

public generateToken(LoginData: any) {}


}
