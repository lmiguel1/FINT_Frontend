import { Component, OnInit } from '@angular/core';
import { UserDto } from '../user-dto';
import { User } from '../user';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user!:User[];
  firstName!:string;
  lastName!:string;
  email!:string;
  password!:string;

  emailExists:boolean = false;


  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      res => this.user = res
    );
  }

  checkEmail(){
    this.userService.checkEmail(this.email).subscribe({
      next: (result) => {
        this.emailExists = result;
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }


  register(){
    let user:UserDto = {
      name: `${this.firstName} ${this.lastName}`,
      email: this.email,
      password: this.password,
      role: "user"
    }
    this.userService.create(user).subscribe(
      res => {
        console.log("Usuario creado satisfactoriamente", res);
      },
      error => {
        console.log(error);
        
      }
    )
  }
}
