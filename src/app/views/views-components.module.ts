import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// MODULES STATEMENTS
import { ContainersComponentsModule } from '../containers/containers-components.module';

// VIEWS STATEMENTS
import { LoginViewComponent } from './login/login.component';
import { DashboardViewComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ContainersComponentsModule,
  ],
  declarations: [
    LoginViewComponent,
    DashboardViewComponent,
  ],
  exports: [
    LoginViewComponent,
    DashboardViewComponent,
    ContainersComponentsModule,
  ]
})

export class ViewsComponentsModule { }
