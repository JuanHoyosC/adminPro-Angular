import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {



  //Inputs
  @Input() labels: Label[] = [];
  @Input() data: MultiDataSet = [];
  @Input() title: string = '';


   public doughnutChartType: ChartType = 'doughnut';
   public colors: Color[] = [{backgroundColor: ['#6857E6', '#009FEE', '#F02059']}];
 
   constructor() { }
 
   ngOnInit(): void {
   }
 
   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
     console.log(event, active);
   }
 
   public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
     console.log(event, active);
   }


}
