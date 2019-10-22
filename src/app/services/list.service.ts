import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  color=['RED','BLUE','WHITE','YELLOW']

  constructor() { }

  getColor(){
    return this.color;
  }
}
