import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})
export class P2Component implements OnInit {

  @Input('name') public abc;

  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onfireEvent(){
    this.childEvent.emit("This is Output Decorator");
  }

}
