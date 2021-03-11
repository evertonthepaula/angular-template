import { AbstractControl } from "@angular/forms";

export class PasswordValidator {
  static SenhasCombinam(controle: AbstractControl) {
    let senha = controle.get('senha').value;
    let confirmarSenha = controle.get('confirmarSenha').value;

    if (senha === confirmarSenha) return null;

    controle.get('confirmarSenha').setErrors({ senhasNaoCoincidem: true });
  }
}