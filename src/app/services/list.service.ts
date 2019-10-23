import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  colors=[
    'RED',
    'BLUE',
    'WHITE',
    'YELLOW'
  ]

  constructor() { }

  getColor(){
    return this.colors;
  }
}
