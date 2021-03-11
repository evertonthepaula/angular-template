import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toAge'
})
export class AgePipe implements PipeTransform {
  transform(dataNascimento: string): any {
    var today = new Date();
    var birthDate = new Date(dataNascimento);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

}
