import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}