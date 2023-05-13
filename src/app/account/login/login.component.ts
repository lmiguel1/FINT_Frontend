import { Component, OnInit } from '@angular/core';
import { Credential } from '../credential';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  hide = true;
  email!:string;
  password!:string;


  user!: User[];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      response => this.user = response
    );
  }


  login(){
    let user:Credential ={
      email: this.email,
      password: this.password
    }
    this.userService.signIn(user).subscribe(
      res => {
        console.log(this.userService.getToken());
        
      }
    )
  }
}
