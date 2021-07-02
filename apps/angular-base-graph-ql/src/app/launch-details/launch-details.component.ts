import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nx-workspace-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
