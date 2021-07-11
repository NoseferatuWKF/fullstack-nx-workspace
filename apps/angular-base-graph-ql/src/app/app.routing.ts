import { Routes } from "@angular/router";
import { CarsComponent } from "./cars/cars.component";
import { EnginesComponent } from "./engines/engines.component";

export const appRoutes: Routes = [
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'engines',
    component: EnginesComponent
  }
]
