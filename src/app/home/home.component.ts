import { Component, OnInit } from '@angular/core';

declare function customInitFuntions(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  linkTheme: any = document.querySelector('#theme');
  constructor() {   }

  ngOnInit(): void {
    this.addTheme();
    customInitFuntions();
  }

  addTheme() {
    const theme = localStorage.getItem('url-theme')  || './assets/css/colors/default-dark.css';
    this.linkTheme.setAttribute('href', theme);    
  }

}
