import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Module } from '../module';
import { UserService } from 'src/app/account/user.service';
import { User } from 'src/app/account/user';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  hasToken = false;
  modules!: Module[];
  user!: User;
  isAdmin: boolean = false;
  loggedEmail: string | null= localStorage.getItem('email');

  constructor(private contentService: ContentService, private userService: UserService){}

  ngOnInit(): void {
    //Check if 'token' exists in local storage
    this.hasToken = !!localStorage.getItem('token');

    //Retreive modules' data
    this.contentService.getAllModules().subscribe(
      res => {
        this.modules = res;
      }
    )
    if(this.loggedEmail != null){
      this.userService.userByEmail(this.loggedEmail).subscribe(
        res => {
          this.user = res;
          if(this.user.role === 'admin'){
            this.isAdmin = true;
          }
        }
        
      )
    }
  }
  confirmRemoval(id:number){
    const confirmDelete = window.confirm("Esta seguro que desea eliminar este modulo? Esta accion es irreversible");
    if(confirmDelete){
      this.contentService.deleteModule(id).subscribe(
        res => {
          console.log(`Modulo: ${id} borrado satisfactoriamente`);
          window.location.reload();
        }
      )
    };
  };
}
