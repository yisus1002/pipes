import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  // transform(value: string):string {
  //   let nombre = value.split('');
  //     let aux=[];
  //   for (let i = 0; i < nombre.length; i++) {
  //     aux.push('*');
  //   }
  //   return aux.join('');
  // }
  // solucion 2 
  transform(value: string, mostrar:boolean=true):string {

    return (mostrar) ? '*'.repeat(value.length) :value;
  }

}
