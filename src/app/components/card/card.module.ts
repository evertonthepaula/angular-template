import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORTED MODULES
import { IconsComponentsModule } from '../icons/icons.module';

// LOCAL COMPONENTS
import { CardComponent } from './card.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardSubtitleComponent } from './card-subtitle/card-subtitle.component';
import { CardSubheadingComponent } from './card-subheading/card-subheading.component';


@NgModule({
  imports: [
    CommonModule,
    IconsComponentsModule
  ],
  declarations: [
    CardComponent,
    CardTitleComponent,
    CardSubtitleComponent,
    CardSubheadingComponent,
  ],
  exports: [
    CardComponent,
    CardTitleComponent,
    CardSubtitleComponent,
    CardSubheadingComponent,
  ]
})

export class CardComponentModule { }
