import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/Heroes.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {
  
  transform(heroes: Heroe[], ordenadoPor:string ='nombre'): Heroe[] {
    if(ordenadoPor==='nombre') heroes = heroes.sort( (a,b)=> (a.nombre>b.nombre) ? 1: -1 );
    else if(ordenadoPor==='vuela') heroes = heroes.sort( (a,b)=> (a.vuela>b.vuela) ? -1: 1 );
    else  heroes = heroes.sort( (a,b)=> (a.color>b.color) ? 1: -1 );
    return heroes; 
  }

}
