import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent  {

  @Input() valor: number = 0;
  @Input() btnClass = '';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();
  constructor() { }


  aumentar(valor: number) {
    this.valor = this.valor + valor >= 100 ? 100 : this.valor + valor;
    this.valorSalida.emit(this.valor);
  }

  desminuir(valor: number) {
    this.valor = this.valor - valor <= 0 ? 0 : this.valor - valor;
    this.valorSalida.emit(this.valor);
  }

  onChange() {
    if(this.valor >= 100) this.valor = 100;
    if(this.valor <= 0) this.valor = 0;
    this.valorSalida.emit(this.valor);
  }



}
