// import { NgModule } from "@angular/core";
// import { CounterComponent } from "./components/counter/counter.component";

import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

// @NgModule({
//   declarations: [
//     CounterComponent
//   ],
//   exports: [// exponer a CounterComponent al mundo exterior
//     CounterComponent
//   ]
// })
@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
