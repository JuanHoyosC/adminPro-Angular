import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotPageFoundComponent } from './404/not-page-found.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '404',
    component: NotPageFoundComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404'
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
