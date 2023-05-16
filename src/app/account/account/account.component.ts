import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { HeaderComponent } from 'src/app/partials/header/header.component';
import { UserDto } from '../user-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  thisUser!: User;
  thisUserEmail = localStorage.getItem('email');
  headerCom!: HeaderComponent;

  userName!: string;
  userPass!: string;


  constructor(private userService: UserService, private router: Router) {};

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
  updateUser(){
    if(this.thisUserEmail != null){
      let user: UserDto = {
        name: this.userName,
        email: this.thisUserEmail,
        password: this.userPass,
        role: "user"
      }
      if(this.userName != null && this.userPass != null){
        this.userService.update(user, this.thisUser.id).subscribe(
          res => {
            console.log(res);
            
            console.log("El usuario ha sido modificado");
            this.router.navigate(['/'])
          }
        )
      }
    } else {
      window.location.reload();
    }
  }
}
