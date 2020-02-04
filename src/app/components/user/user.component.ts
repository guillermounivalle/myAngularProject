import { Component, OnInit } from '@angular/core';

//Importamos el servicio de user
import {UserService} from './user.service';

//Importamos la clase User
import {User} from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [
    new User(1, "Jose", "Perez", "JoseCareCulogmail.com")
  ]; //DeclarandoUn array de usuarios
  constructor(
    private _userService: UserService
  ) {
    
   }

  ngOnInit() {
    //this.getUsers();  //No olvidar llamar el this.
  }

  getUsers(){
    this._userService.getUsers()
      .then(users => this.users = users);
  }

  create(user: User){
    this.users.push(user);
  }

  deleteUser(user: User){
    const i =this.users.indexOf(user);
    this.users.splice(i , 1);
  }

  updateUser(user){
    const i =this.users.indexOf(user.original);
    this.users[i] = user.edited;
  }
  
}
