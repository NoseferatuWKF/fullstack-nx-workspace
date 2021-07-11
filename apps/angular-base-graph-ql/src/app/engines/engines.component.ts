import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { EngineListGQL } from '../services/graphql.service';

@Component({
  selector: 'nx-workspace-engines',
  templateUrl: './engines.component.html',
  styleUrls: ['./engines.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnginesComponent {

  engines$ = this.engineGQL.fetch().pipe(
    map(a => a.data.engines.data)
  )

  constructor(private engineGQL: EngineListGQL) { }

}
