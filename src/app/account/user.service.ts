import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { User } from './user';
import { Credential } from './credential';
import { UserDto } from './user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginSubject = new Subject<void>();
  private apiUrl:string = 'http://localhost:8080/users'

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  checkEmail(email:string):Observable<boolean>{
    return this.http.get<boolean>(`${this.apiUrl}/checkEmail/${email}`)
  }


  create(user: UserDto): Observable<User>{
    return this.http.post<User>(this.apiUrl, user);
  }


  signIn(credential:Credential){
    return this.http.post("http://localhost:8080/login", credential, {
      observe: 'response'})
      .pipe(map((response:HttpResponse<any>) => {
        const body = response.body;
        const headers = response.headers;
        const bearerToken = headers.get("Authorization");
        let token:string;
        if(bearerToken != null){
          token = bearerToken?.replace('Bearer ', "");
          localStorage.setItem("token", token);
        }
        this.loginSubject.next();
        return body;
      }))
  }
  getLoginSubject(){
    return this.loginSubject.asObservable();
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
