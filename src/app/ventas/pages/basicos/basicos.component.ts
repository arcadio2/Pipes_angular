import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string='arcadio';
  nombreUpper:string='ARCADIO';
  nombreCompleto: string='ArCAdiO LoPeZ';
  fecha:number =  Date.now(); 
  constructor() { }

  ngOnInit(): void {
  }

}
