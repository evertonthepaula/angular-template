import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES DECLARATIONS
import { ChartsModule } from './charts/charts.module';
import { CardComponentModule } from './card/card.module';
import { FormsComponentsModule } from './forms/forms.module';
import { IconsComponentsModule } from './icons/icons.module';
import { LoadersComponentsModule } from './loaders/loaders.module';


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    CardComponentModule,
    FormsComponentsModule,
    IconsComponentsModule,
    LoadersComponentsModule,
  ],
  exports: [
    ChartsModule,
    CardComponentModule,
    FormsComponentsModule,
    IconsComponentsModule,
    LoadersComponentsModule,
  ],
})

export class CoreComponentsModule { }
