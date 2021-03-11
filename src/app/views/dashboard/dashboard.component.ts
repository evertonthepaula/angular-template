import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

// ACTIONS

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardViewComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit() {}
}
