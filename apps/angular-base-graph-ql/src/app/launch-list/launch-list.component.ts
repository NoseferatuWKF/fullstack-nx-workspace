import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PastLaunchesListGQL } from '../services/spacexGraphql.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'nx-workspace-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent {

  constructor( private launchService: PastLaunchesListGQL) { }

  pastLaunches$ = this.launchService.fetch({limit: 30}).pipe(
    map(a => a.data.launchesPast)
  )

}
