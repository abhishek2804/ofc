import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgurl= "";

  colors: string[];

  constructor(private colorList:ListService) { }

  ngOnInit() {
    this.getColors();
  }

  getColors(){
    this.colors = this.colorList.getColor();
  }
  
}
