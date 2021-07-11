import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { CarsListGQL } from '../services/graphql.service';

@Component({
  selector: 'nx-workspace-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsComponent {

  cars$ = this.carsGQL.fetch().pipe(
    map(a => a.data.cars.data)
  )

  constructor(private carsGQL: CarsListGQL) { }

}
