import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';



@Component({
  templateUrl: './full-screem-page.component.html',
  styleUrl: './full-screem-page.component.css'
})
export class FullScreemPageComponent implements AfterViewInit {


  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {

    if(!this.divMap) throw 'El elemento HTML no fue encontrado';

    const map = new Map({
      accessToken: 'pk.eyJ1IjoiYnJ5YW5lc3RlYmFuIiwiYSI6ImNsdnBwNmUyYzA0cHIyam1naDA0cmo0cDMifQ.LjzMwPbVrQ2qAKXIOJeCiw',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

  }

}
