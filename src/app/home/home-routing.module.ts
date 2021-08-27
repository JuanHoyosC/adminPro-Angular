import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DashboardComponent, 
        data: { titulo: 'Dashboard' }
      },
      {
        path: 'progress',
        component: ProgressComponent, 
        data: { titulo: 'Progress' }
      },
      {
        path: 'grafica1',
        component: Grafica1Component, 
        data: { titulo: 'Grafica1' }
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent, 
        data: { titulo: 'Account-settings' }
      },
      {
        path: 'rxjs',
        component: RxjsComponent, 
        data: { titulo: 'Rxjs' }
      }
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
