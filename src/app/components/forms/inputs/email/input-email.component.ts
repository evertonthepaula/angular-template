import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent {
  @Input() placeholder: string = 'email@email.com';
  @Input() formGroup: FormGroup;
  @Input() label: string = '';
  @Input() name: string;

  public status = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup.addControl(this.name, this.formBuilder.control(null, [Validators.required, Validators.email]));
  }

  onKeyup({ target: { value } }) {
    this.formGroup.controls[this.name].setValue(value);
    this.status = this.formGroup.controls[this.name];  
  }
}
