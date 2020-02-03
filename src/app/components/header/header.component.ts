import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',  //Nombre que le vamos a poner
  templateUrl: './header.component.html',  //El código html
  styleUrls: ['./header.component.css']  //Código css o scss o el que se vaya a usar
})
export class HeaderComponent implements OnInit {  //Exportamos con el nombre HeaderComponent
                                                  //para que lo detecte el appModule

  constructor() {
    console.log("El componente se está creando");
    //Se ejecuta mientras se crea
   }
  
  ngOnInit() {
    console.log("Componente ya creado");
    //Se ejecuta cuando se ha creado satisfactoriamente
  }

    nombre = "Guillermo";
    contador = 0;

    cambiarNombre(){
      this.nombre = "Pedro";
    }

    sumarVisitas(){
      this.contador += 1;
    }

}
