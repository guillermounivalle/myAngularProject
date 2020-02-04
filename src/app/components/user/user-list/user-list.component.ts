import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Importamos la clase User
import {User} from '../user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users;
  @Output() deleteUserEvent = new EventEmitter();
  @Output() updateUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  deleteUser(user: User){
    const response = confirm('Delete?');
    if(response){
      this.deleteUserEvent.emit(user);
    }
  }

  updateUser(users){
    this.updateUserEvent.emit(users);
  }
}
