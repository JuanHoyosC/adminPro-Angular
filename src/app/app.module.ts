import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotPageFoundComponent } from './404/not-page-found.component'



@NgModule({
  declarations: [
    AppComponent,
    NotPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
