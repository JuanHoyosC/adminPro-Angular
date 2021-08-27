import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import {  filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  titulo: string = '';
  tituloObs$: Subscription;

  constructor(private router: Router) {
    this.tituloObs$ = this.getArgumentosRuta().subscribe(({titulo}) => {
      this.titulo = titulo;
      document.title = titulo;
    })
   }


   ngOnDestroy(): void {
     this.tituloObs$.unsubscribe();
   }



   getArgumentosRuta(){
    return this.router.events
    .pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    )
   }

  ngOnInit(): void {
  }

}
