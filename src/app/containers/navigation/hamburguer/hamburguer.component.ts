import { Component, EventEmitter, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';

// MODELS
// ACTIONS
// STATE
import { ThemeState } from 'src/app/store/theme/theme.state';
// SERVICES

@Component({
  selector: 'app-hamburguer-menu',
  templateUrl: './hamburguer.component.html',
  styleUrls: ['./hamburguer.component.scss']
})
export class HamburguerMenuComponent implements OnInit {
  public open: boolean = false;
  public theme = { name: '', logo: '', alt: '' }

  @ViewChild('dialogContent') dialogContent: any;

  @Output() closeAction = new EventEmitter();

  windowRef: any;

  constructor(private store: Store) {
    this.store
      .select(ThemeState.getName)
      .subscribe(name => {
        this.theme = {
          name,
          logo: `/assets/img/logo/angular.png`,
          alt: `Logo`,
        }
      }
      );
  }

  ngOnInit(): void { }

  ngOnChanges(change: SimpleChanges): void { }

  ngOnDestroy(): void { }

  public toogleMenu() {
    this.open = !this.open;
    this.closeAction.emit({ eventType: 'HamburguerMenuComponent', eventAction: 'MenuOpen', status: this.open });
  }
}

