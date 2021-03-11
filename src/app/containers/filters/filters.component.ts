import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersContainer implements OnInit {
  public open: boolean = false;

  @Output() closeAction = new EventEmitter();
  @Output() filterAction = new EventEmitter();

  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      filtro1: [''],
      filtro2: [''],
    });
  }

  public toogleFilter() {
    this.open = !this.open;
    this.closeAction.emit({ eventType: 'FiltersContainer', eventAction: 'FilterOpen', status: this.open });
  }

  public onSubmit() {
    this.filterAction.emit({ eventType: 'FiltersContainer', eventAction: 'submitFilter', 'values': this.filterForm.value });
  }
}

