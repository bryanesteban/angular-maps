import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {LngLat, Map, Marker} from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}


@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: `./mini-map.component.css`
})
export class MiniMapComponent implements AfterViewInit {

  @Input() lngLat?: [number, number];

  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.5, 40);
  public zoom: number = 15;

  public markers: MarkerAndColor[] = [];

  ngAfterViewInit(){
    if( !this.divMap?.nativeElement) throw " LngLat can't be null";
    if( !this.lngLat) throw " LngLat can't be null";

    if(!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      accessToken: 'pk.eyJ1IjoiYnJ5YW5lc3RlYmFuIiwiYSI6ImNsdnBwNmUyYzA0cHIyam1naDA0cmo0cDMifQ.LjzMwPbVrQ2qAKXIOJeCiw',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
      interactive: false,
    });

    this.createMarker();

  }

  createMarker(){

    if(!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker( lngLat: LngLat, color: string){
    if(!this.map) return;

    const marker = new Marker({
      color: color,
      draggable:false,
    })
    .setLngLat(lngLat)
    .addTo(this.map);

    this.markers.push( {color, marker});

    // this.saveToLocalStorage();

    // marker.on('dragend', () => this.saveToLocalStorage());


  }

}
