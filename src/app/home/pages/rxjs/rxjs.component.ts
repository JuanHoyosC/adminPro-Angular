import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, map, take, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalo: Subscription;

  constructor() { 
    /*
    this.retornarObservable().pipe(
      retry()
    ).subscribe(res => console.log(res),
                    error => console.log(error),
                    () => console.log('terminado'))
    */
    this.intervalo = this.retornarIntervalo().subscribe(res => console.log(res))
    
  }

  ngOnDestroy (): void {
    this.intervalo.unsubscribe();
    console.log('byee')
  }

  retornarIntervalo() : Observable<number> {
    return interval(1000)
                    .pipe(
                      //El orden importa
                      take(20), // debe ir de primer 
                      map(valor => valor+ 1),
                      map(valor => valor * 2),
                      filter(valor => (valor % 2 === 0))
                    )
  }

  retornarObservable(): Observable<number> {
   let i = -1;
   return new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i)

        if(i === 3) {
          observer.error('Hubo un error')
        }


        if(i === 5) {
          observer.complete()
          clearInterval(intervalo);
        }
        
      }, 1000)
    })

  }

  ngOnInit(): void {
  }

}
