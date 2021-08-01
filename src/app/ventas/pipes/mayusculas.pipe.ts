import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'mayusculas',

})
export class MayusculasPipe implements PipeTransform{
    transform(valor:string, ban:boolean = true):string {
        //if(ban)return valor.toUpperCase();
        //else return valor.toLowerCase();
        return (ban) ? valor.toUpperCase(): valor.toLowerCase();
    }

}