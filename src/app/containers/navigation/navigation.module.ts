import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsComponentsModule } from 'src/app/components/icons/icons.module';

// LOCAL COMPONENTS
import { HamburguerMenuComponent } from './hamburguer/hamburguer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IconsComponentsModule,
  ],
  declarations: [
    HamburguerMenuComponent,
  ],
  exports: [
    HamburguerMenuComponent,
  ]
})

export class NavigationComponentModule { }
