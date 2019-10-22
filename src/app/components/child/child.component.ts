import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('parentData') public name ;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('This is Event Emitter Demo!!');
  }
}
