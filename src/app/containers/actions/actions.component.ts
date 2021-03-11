import { Component, EventEmitter, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsContainer implements OnInit {
  public open: boolean = false;

  @ViewChild('dialogContent') dialogContent: any;

  @Output() closeAction = new EventEmitter();

  windowRef: any;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(change: SimpleChanges): void { }

  ngOnDestroy(): void { }

  public toogleActions() {
    this.open = !this.open;
    this.closeAction.emit({ eventType: 'ActionsComponent', eventAction: 'actionsIsOpen', status: this.open });
  }
}

