import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [// exponer a CounterComponent al mundo exterior
    CounterComponent
  ]
})

export class CounterModule {}
