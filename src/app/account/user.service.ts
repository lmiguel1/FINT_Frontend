import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { User } from './user';
import { Credential } from './credential';
import { UserDto } from './user-dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public loginSubject = new Subject<void>();
  private apiUrl:string = 'http://localhost:8080/test/users'

  constructor(private http: HttpClient, private router: Router) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  checkEmail(email:string):Observable<boolean>{
    return this.http.get<boolean>(`${this.apiUrl}/checkEmail/${email}`)
  }
  
  userByEmail(email: string): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/userByEmail`, email);
  }
  create(user: UserDto): Observable<User>{
    return this.http.post<User>(this.apiUrl, user);
  }
  update(user: UserDto, id: number): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
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

  signOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.loginSubject.next(); //Notify subscribed observers.
    this.router.navigate(['/']).then(() => window.location.reload());
  }
  isAdmin(): Observable<boolean>{
    return new Observable<boolean>(observer => {
      const email = localStorage.getItem('email');
      if(email){
        this.userByEmail(email).subscribe(
          res => {
            const isAdmin = res.role === 'admin';
            console.log(isAdmin);
            observer.next(isAdmin);
            observer.complete();
          }
        );
      } else {
        observer.next(false);
        observer.complete();
      }
    });
  }
}
