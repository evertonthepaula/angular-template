import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// LOCAL COMPONENTS
import { LayoutThemeContainer } from './theme/layout.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LayoutThemeContainer
  ],
  exports: [
    LayoutThemeContainer
  ]
})

export class LayoutComponentsModule { }
