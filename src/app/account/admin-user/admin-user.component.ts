import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {
  users !: User[];
 

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.userService.getAll().subscribe(
        res => { 
          this.users = res;
        }
      )
     
  }


}
