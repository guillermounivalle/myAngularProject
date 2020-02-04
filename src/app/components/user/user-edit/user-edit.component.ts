import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input() user: User;
  userEdit: User = new User;
  @Output() updateUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    Object.assign(this.userEdit, this.user);
  }
  updateUser(){
    this.userEdit.editable = false; //Para que se cuarde el componente de actualizaciòn de datos
    this.updateUserEvent.emit({
      original: this.user,
      edited: this.userEdit
    })
  }
    
}
