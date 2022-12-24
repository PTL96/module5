import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
firthNumber : number = 0;
secondNumber: number = 0;
result: (number|string)=0;
  constructor() { }

  ngOnInit(): void {
  }

  sum($event: MouseEvent) {
    this.result = parseInt(String(this.firthNumber)) + parseInt(String(this.secondNumber));
  }

  subtraction($event: MouseEvent) {
    this.result = parseInt(String(this.firthNumber))-parseInt(String(this.secondNumber));

  }

  multiplication($event: MouseEvent) {
    this.result = parseInt(String(this.firthNumber))*parseInt(String(this.secondNumber));
  }

  division($event: MouseEvent) {
    this.result = parseInt(String(this.firthNumber))/parseInt(String( this.secondNumber));
  }
}
