import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nombre:string = 'Arcadio'; 
  valor: number = 1000;
  obj={
    "nombre":"Arcad"
  }
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  mostrarNOmbre(){
    console.log(this.nombre )
  }
  cambiarNombre(name:string){
    this.nombre=name;
  }
}
