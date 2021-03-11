# ORGANIZAÇÃO ESTILOS

O CONCEITO POR TRÁS DESSES COMPONENTES ESTÁ MELHOR EXPLICADO NO MEDIUM [Object Calisthenics & Angular Reactive Forms — Envolvendo seus tipos primitivos](https://evertonthepaula.medium.com/object-calisthenics-angular-reactive-forms-envolvendo-seus-tipos-primitivos-52652ef4e6e1)

## Como usar

No componente pai você deve definir o **FormGroup**.

```
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
@Component({
selector: 'app-formulario',
templateUrl: './formulario.component.html',
styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
formulario: FormGroup;
constructor(private formBuilder: FormBuilder) { }
ngOnInit() {
   this.formulario = this.formBuilder.group({});
 }
}
```

Quando você chamar os componentes dentro do formulário basta passar o **FormGroup** para o componente.

```
<form [formGroup]="formulario">

  <app-input-email [formGroup]="formulario" name="email" label="E-MAIL"></app-input-email>

  <app-input-password [formGroup]="formulario" name="password" label="Password"></app-input-password>

  <app-input-cpf [formGroup]="formulario" name="cpf" label="CPF"></app-input-cpf>

  <button type="submit">enviar</button>

</form>
```
