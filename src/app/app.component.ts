import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre    : string = 'Capitan america';
  nombre2   :string ='JeSUs DaVId garcIa hernaNdeZ'
  arreglo   :string[]=['Iron man', 'Spider man','Hulk','Vision','Capitan america'];
  PI        : number =Math.PI;
  porcentaje:number = 0.2342;
  salario   :number = 123456;

  idioma    :string = 'es';
  
  videoURL  :string ='https://www.youtube.com/embed/FMA8X18-W1Q';


  valorPromesa= new Promise<string>( (resolve, reject) => {
    setTimeout(() => {
      resolve('Llego la data');
      // reject('Llego la data');
    }, 4500);
  });


  heroe:object={
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion:{
      calle: 'Primera',
      casa: 20
    }
  }
  fecha:Date = new Date();
  activar:boolean=true;
  
  constructor(){

  }


}
