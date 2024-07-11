// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'selector-name',
//   templateUrl: 'name.component.html'
// })

// export class NameComponent implements OnInit {
//   constructor() { }

//   ngOnInit() { }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{ counter }}</h3>
    <button (click)="increase(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increase(-1)">-1</button>
  `
})
export class CounterComponent {
  public counter: number = 10;
  public counterAux = this.counter;

  increase(value:number):void {
    this.counter += value;
  }

  reset() {
    this.counter = this.counterAux;
  }
}
