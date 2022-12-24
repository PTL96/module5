import { Component, OnInit } from '@angular/core';
import {style} from "@angular/animations";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  r:any;
  g:any=0;
  b:any=0;
  rgb:any;

  constructor() { }

  ngOnInit(): void {
  }



  setColor() {
    this.rgb = 'rgb('+this.r+','+this.g+','+this.b+')'
  }
}
