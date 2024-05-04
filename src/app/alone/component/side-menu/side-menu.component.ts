import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


interface MenuItem{
  route: string;
  name: string;
}

@Component({
  selector: 'maps-side-menu',
  standalone: true,
  imports:[RouterModule, CommonModule],

  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] =[
    { route: '/maps/fullscreem', name: 'FullScreen'},
    { route: '/maps/zoom-range', name: 'Zoom-Range'},
    { route: '/maps/markers', name: 'Markers'},
    { route: '/maps/properties', name: 'Houses'},
    { route: '/alone'          , name: 'Alone Page'}
  ]
}
