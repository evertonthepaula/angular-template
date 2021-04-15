import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// LOCAL COMPONENTS
import { InputCpfComponent } from './inputs/cpf/input-cpf.component';
import { InputEmailComponent } from './inputs/email/input-email.component';
import { FieldErrorsComponent } from './errors/field-error-display.component';
import { InputPasswordComponent } from './inputs/password/input-password.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InputCpfComponent,
    InputEmailComponent,
    FieldErrorsComponent,
    InputPasswordComponent,
  ],
  exports: [
    InputCpfComponent,
    InputEmailComponent,
    FieldErrorsComponent,
    InputPasswordComponent,
  ]
})

export class FormsComponentsModule { }
