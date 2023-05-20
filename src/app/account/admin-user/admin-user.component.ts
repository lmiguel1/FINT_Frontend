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
  confirmDelete(id:number){
    const confirmDelete = window.confirm("Esta seguro que desea eliminar este usuario? Esta acción es irreversible");
    if(confirmDelete){
      this.userService.delete(id).subscribe(
        res => {
          console.log(`Usuario: ${id} borrado con exito.` );
          window.location.reload();
        }
      )
    }

  }

}
