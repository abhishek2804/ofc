import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  
  public appData = "This is input decorator";
  public imgUrl = "https://picsum.photos/id/237/200/300";
  public total = 0;
  public count;
  constructor() { }

  ngOnInit() {
  }

  total_price(){
    this.total = this.count*5000;
    return this.total;
  }

}
