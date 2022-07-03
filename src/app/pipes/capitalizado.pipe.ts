import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas:boolean=true): string {
    value=value.toLocaleLowerCase();
    let nombre=value.split(' ');
    // console.log(nombre);

    if(todas){
      nombre=nombre.map(nombre =>{
        return nombre[0].toUpperCase() + nombre.substring(1);
      });
    }else{
      nombre[0]=nombre[0][0].toUpperCase()+ nombre[0].substring(1);
    }
    return nombre.join(' ');
    // console.log(value);
    // console.log(todas);
  }

}
