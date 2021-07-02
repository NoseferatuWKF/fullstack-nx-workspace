import { Routes } from "@angular/router";
import { LaunchDetailsComponent } from "./launch-details/launch-details.component";
import { LaunchListComponent } from "./launch-list/launch-list.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: LaunchListComponent
  },
  {
    path: ':id',
    component: LaunchDetailsComponent
  }
]
