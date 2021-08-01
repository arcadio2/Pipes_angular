import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {
  
  //i18nSelect
  nombre:string='Arcadio';
  genero:string='masculino';
  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes:string[]=['María', 'Pedro', 'Jesus','Arcadio','XD'];
  clientesMapa = {
    '=0':'No tenemos clientes esperando.',
    '=1':'Tenemos un cliente esperando',
    'other':'Tenemos # clientes esperando'
  }

  //KeyValuePipe
  persona = {
    nombre:'Arca',
    edad:35,
    direccion:'Otawa, Candá'
  }

  //jsonPipe
  heroes=[
    {
      nombre:'superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'aquaman',
      vuela:false
    },
    {
      nombre:'batman',
      vuela:true
    }
  ];
  //async pipe
  observable = interval(2000); //0,1,2
  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos la promesa')
    },3500);
  });


  constructor() { }

  ngOnInit(): void {
  }

  cambiarPersona(){
    this.nombre='María';
    this.genero='femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

}
