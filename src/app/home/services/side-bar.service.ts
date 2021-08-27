import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  public menu: any[] = [
    {
      icon: 'mdi mdi-gauge',
      titulo: 'Dasboard',
      submenu: [
        {titulo: 'Dashboard', url: '/'},
        {titulo: 'Progress',  url: 'progress'},
        {titulo: 'Grafica1',  url: 'grafica1'},
        {titulo: 'rxjs',      url: 'rxjs'}
      ]
    }
  ]
  constructor() { }
}
