import { Component, OnInit } from '@angular/core';
import { SideBarService } from '../../services/side-bar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menu: any[] = [];
  constructor(private _sidebar: SideBarService) {
    this.menu = this._sidebar.menu;
  }

  ngOnInit(): void {
    
  }

}
