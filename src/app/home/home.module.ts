import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//modulos
import { ChartsModule } from 'ng2-charts';


//Rutas
import { HomeRoutingModule } from './home-routing.module';


//Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';


//Componentes
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { DonaComponent } from './components/dona/dona.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProgressComponent,
    ProgressBarComponent,
    IncrementadorComponent,
    Grafica1Component,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    ChartsModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
