import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/Heroes.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
  enMayusculas:boolean = false;
  ordenado: string='nombre';
  constructor() { }

  ngOnInit(): void {
  }

  heroes:Heroe[]=[
    {
      nombre: 'Superman',
      vuela:true,
      color: Color.azul
    },
    {
      nombre: 'Daredevil',
      vuela:false,
      color: Color.rojo
    }, 
    {
      nombre: 'Linterna verde',
      vuela:true,
      color: Color.verde
    }, 
    {
      nombre: 'Goku',
      vuela:true,
      color: Color.negro
    },
    {
      nombre: 'Hulk',
      vuela:false,
      color: Color.verde
    },  
    
  ];
  cambiar(){
    this.enMayusculas=!this.enMayusculas;
  }
  cambiarPipe(valor: string){
    this.ordenado=valor;
  }

}
