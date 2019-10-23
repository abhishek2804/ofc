import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit, AfterViewInit {

  public name = "";
  @ViewChild('nameRef', {static: false}) nameElementRef: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }

}
