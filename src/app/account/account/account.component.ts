import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { HeaderComponent } from 'src/app/partials/header/header.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  thisUser!: User;
  thisUserEmail = localStorage.getItem('email');
  headerCom!: HeaderComponent;
  constructor(private userService: UserService) {};

  ngOnInit(): void {
    //Check user's info with it's email
    if(this.thisUserEmail){
      this.userService.userByEmail(this.thisUserEmail).subscribe(
        res => this.thisUser = res
      );
    }
  }

  logOut(){
    this.userService.signOut();
  }
}
