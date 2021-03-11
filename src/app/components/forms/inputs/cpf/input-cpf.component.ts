import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';

// CUSTOM VALIDATOR
import { CpfValidator } from 'src/app/Validators';

@Component({
  selector: 'app-input-cpf',
  templateUrl: './input-cpf.component.html',
  styleUrls: ['./input-cpf.component.scss']
})
export class InputCpfComponent {
  @Input() placeholder: string = '000.000.000-00';
  @Input() formGroup: FormGroup;
  @Input() label: string = '';
  @Input() name: string;

  public status = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup.addControl(this.name, this.formBuilder.control(null, [Validators.required, CpfValidator.ValidaCpf]));
  }

  onKeyup({ target: { value } }) {
    this.formGroup.controls[this.name].setValue(value);
    this.status = this.formGroup.controls[this.name];
  }
}
