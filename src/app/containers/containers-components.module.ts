import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MODULES STATEMENTS
import { CoreComponentsModule } from '../components/core-components.module';
import { LayoutComponentsModule } from './layout/layout.module';

// COMPONENTS STATEMENTS
import { SearchContainer } from './search/search.component';
import { HeaderContainer } from './header/header.component';
import { FooterContainer } from './footer/footer.component';
import { ActionsContainer } from './actions/actions.component';
import { FiltersContainer } from './filters/filters.component';
import { BasicDialogContainer } from './dialog/dialog.component';
import { NavigationComponentModule } from './navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CoreComponentsModule,
    LayoutComponentsModule,
    NavigationComponentModule,
  ],
  declarations: [
    SearchContainer,
    ActionsContainer,
    HeaderContainer,
    FooterContainer,
    FiltersContainer,
    BasicDialogContainer,
  ],
  exports: [
    SearchContainer,
    HeaderContainer,
    FooterContainer,
    ActionsContainer,
    FiltersContainer,
    CoreComponentsModule,
    BasicDialogContainer,
    LayoutComponentsModule,
    NavigationComponentModule,
  ]
})

export class ContainersComponentsModule { }
