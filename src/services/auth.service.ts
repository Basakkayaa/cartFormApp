import { Injectable } from '@angular/core';
import { LoginDto } from '../models/login-dto';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  login(loginDto: LoginDto): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>("http://10.20.101.15", loginDto)
  }
  logout(): boolean {
    return true;
  }
  isLogin(): boolean {
    return false;
  }
}
