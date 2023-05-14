import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/account/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  public userEmail!:string;
  isLoggedIn: boolean = false;
  loginSubscription!: Subscription;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    //Check if user is already logged in
    if(this.userService.getToken()){
      this.isLoggedIn = true;
      const userEmail = localStorage.getItem('email');
      if(userEmail){
        this.userEmail = userEmail;
      }
    }

    //Subscribe to login events
    this.loginSubscription = this.userService.getLoginSubject().subscribe(() => {
      this.isLoggedIn = true;
      const userEmail = localStorage.getItem('email');
      if(userEmail){
        this.userEmail = userEmail;
      }
    });
  }

  ngOnDestroy(): void {
    //Unsubscribe from login events
    this.loginSubscription.unsubscribe();
  }
}
