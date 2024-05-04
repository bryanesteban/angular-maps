import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../component/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../../component/side-menu/side-menu.component';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  imports:[CommonModule, CounterAloneComponent, SideMenuComponent],
  templateUrl: './alone-page.component.html',
  styleUrl: './alone-page.component.css'
})
export class AlonePageComponent {

}
