import { Component, OnInit, } from '@angular/core';
import { Store } from '@ngxs/store';

// MODELS
// ACTIONS
// STATE

// SERVICES

@Component({
  selector: 'app-Layout-theme',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutThemeContainer implements OnInit {
  public theme: string;

  constructor(private store: Store) {
    // this.store.select(OperadoraState.getName).subscribe(name => this.theme = name);
  }

  ngOnInit(): void {}
}
