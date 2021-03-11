import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class BasicDialogContainer implements OnInit {
  @Input() open: boolean = false;

  @ViewChild('dialogContent') dialogContent: any;

  @Output() closeAction = new EventEmitter();

  windowRef: any;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(change: SimpleChanges): void { }

  ngOnDestroy(): void { }

  public close(): void {
    this.open = false;
    this.closeAction.emit({ eventType: 'BasicDialogContainer', eventAction: 'DialogOpen', status: this.open });
  }
}

