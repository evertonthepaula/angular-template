import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PIPES DECLARATIONS
import { AgePipe } from './age.pipe';
import { AbreviateNumberPipe } from './abreviateNumber.pipe';

@NgModule({
  declarations: [
    AgePipe,
    AbreviateNumberPipe,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [
    AgePipe,
    AbreviateNumberPipe,
  ]
})

export class PipesModule { }
