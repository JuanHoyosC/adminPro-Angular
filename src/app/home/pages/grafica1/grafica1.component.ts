import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {

  labels1: Label[] = ['Ventas', 'Compras', 'Inventario'];
  data1: MultiDataSet = [[34,56,56], [235,67,23], [23,46,123]];

  labels2: Label[] = ['Ventas', 'Compras', 'Inventario'];
  data2: MultiDataSet = [[54,61,13], [65,17,243], [24,46,23]];

   constructor() { }
 
   ngOnInit(): void {
   }
 
 

}
