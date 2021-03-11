import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicDialogComponent implements OnInit {
  @Input() open: boolean = false;

  @ViewChild('dialogContent') dialogContent: any;

  @Output() closeAction = new EventEmitter();

  windowRef: any;

  constructor() {}

   ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change.open) {
      this.printHandler();
    }
  }

  ngOnDestroy(): void {
    this.closeWindow();
  }

  private printHandler() {
    if (this.open) {
      return this.openWindow();
    }

    return this.closeWindow();
  }

  private openWindow(): void {

  }

  private closeWindow(): void {

  }
}

