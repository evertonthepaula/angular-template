import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-error-display',
  templateUrl: './field-error-display.component.html',
  styleUrls: ['./field-error-display.component.scss']
})
export class FieldErrorsComponent {
  @Input() status: FormControl;
  @Input() show: boolean;
  @Input() FieldName: string;

  constructor() { }
}
