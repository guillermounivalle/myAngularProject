import { Injectable } from '@angular/core';

//Importamos el método http
import { Http } from '@angular/http';

//Importamos la clase usuario (user)
import { User } from './user';


//Importamos los rxjs para devolver una promesa (promise)
import "rxjs";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: Http
  ) { }

    createUser(user: User){
      return this._http.post('/users', user)
        .map(data => data.json()).toPromise();
    }

    deleteUser(user: User){
      return this._http.delete('/users/' + user._id)
        .map(data => data.json()).toPromise();
    }

    updateUser(user: User){
      return this._http.put('/users/' + user._id, user)
        .map(data => data.json()).toPromise();
    }

    getUsers(){
      return this._http.get('/users')
      .map(data => data.json()).toPromise();
    }

    getUser(user: User){
      return this._http.get('/users/' + user._id)
      .map(data => data.json()).toPromise();
    }

}
