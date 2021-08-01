import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'vuela',

})

export class VuelaPipe implements PipeTransform{
    transform(ban:boolean = true):string {
        //if(ban)return valor.toUpperCase();
        //else return valor.toLowerCase();
        return (ban) ? "Vuela": "No vuela";
    }
}