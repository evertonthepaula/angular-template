import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// LOCAL COMPONENTS
import { LoaderDotsComponent } from './dots/dots.component';
import { LoaderSpinnerComponent } from './spinner/spinner.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderDotsComponent,
    LoaderSpinnerComponent,
  ],
  exports: [
    LoaderDotsComponent,
    LoaderSpinnerComponent,
  ]
})

export class LoadersComponentsModule { }
