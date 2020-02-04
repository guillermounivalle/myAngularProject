import { Component, OnInit, Output, EventEmitter } from '@angular/core';//Importamos un output para generar una salida


//Importamos la clase User
import { User } from '../user'

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  @Output() createNewUserEvent = new EventEmitter();
  newUser = new User; //Objeto de la instancia usuario
  constructor() { }

  ngOnInit() {
  }
  create(){
    this.createNewUserEvent.emit(this.newUser);
    //Para limpiar los campos del formulario, creamos una nueva instancia del usuario
    this.newUser = new User;
  }
  

}
