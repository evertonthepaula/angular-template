import { AbstractControl } from "@angular/forms";

export class NumberValidator {
  static isnumber(controle: AbstractControl) {
    const val = controle.value;

    if (val === null || val === '') return null;

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)){
      return { numeroInvalido: true };
    }

    return null;
  }
}
