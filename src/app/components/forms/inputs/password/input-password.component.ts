import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent {
  @Input() placeholder: string = '*******';
  @Input() formGroup: FormGroup;
  @Input() label: string = '';
  @Input() name: string;

  public status = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup.addControl(this.name, this.formBuilder.control(null, [Validators.required]));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.status = this.formGroup.controls[this.name];
  }

  onKeyup({ target: { value } }) {
    this.formGroup.controls[this.name].setValue(value);
    this.formGroup.controls[this.name].markAsTouched();
    this.status = this.formGroup.controls[this.name];
  }
}
