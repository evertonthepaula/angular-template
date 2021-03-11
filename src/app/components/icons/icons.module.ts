import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// LOCAL COMPONENTS
import { IconEyeComponent } from './icon-eye/icon-eye.component';
import { IconaAddComponent } from './icon-add/icon-add.component';
import { IconInfoComponent } from './icon-info/icon-info.component';
import { IconUserComponent } from './icon-user/icon-user.component';
import { IconLoadComponent } from './icon-load/icon-load.component';
import { IconaEditComponent } from './icon-edit/icon-edit.component';
import { IconArrowComponent } from './icon-arrow/icon-arrow.component';
import { IconPaperComponent } from './icon-paper/icon-paper.component';
import { IconLogoutComponent } from './icon-logout/icon-logout.component';
import { IconFilterComponent } from './icon-filter/icon-filter.component';
import { IconCancelComponent } from './icon-cancel/icon-cancel.component';
import { IconSearchComponent } from './icon-search/icon-search.component';
import { IconExpandComponent } from './icon-expand/icon-expand.component';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';
import { IconReloadComponent } from './icon-reload/icon-reload.component';
import { IconConfirmComponent } from './icon-confirm/icon-confirm.component';
import { IconMinimizeComponent } from './icon-minimize/icon-minimize.component';
import { IconFatArrowComponent } from './icon-arrow-fat/icon-arrow-fat.component';
import { IconDashboardComponent } from './icon-dashboard/icon-dashboard.component';
import { IconInfoSolidComponent } from './icon-info-solid/icon-info-solid.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconDashboardComponent,
    IconInfoSolidComponent,
    IconFatArrowComponent,
    IconMinimizeComponent,
    IconConfirmComponent,
    IconExpandComponent,
    IconFilterComponent,
    IconSearchComponent,
    IconCancelComponent,
    IconDeleteComponent,
    IconReloadComponent,
    IconLogoutComponent,
    IconPaperComponent,
    IconaEditComponent,
    IconArrowComponent,
    IconLoadComponent,
    IconInfoComponent,
    IconUserComponent,
    IconaAddComponent,
    IconEyeComponent,
  ],
  exports: [
    IconDashboardComponent,
    IconInfoSolidComponent,
    IconFatArrowComponent,
    IconMinimizeComponent,
    IconConfirmComponent,
    IconExpandComponent,
    IconPaperComponent,
    IconFilterComponent,
    IconSearchComponent,
    IconCancelComponent,
    IconDeleteComponent,
    IconReloadComponent,
    IconLogoutComponent,
    IconaEditComponent,
    IconArrowComponent,
    IconLoadComponent,
    IconInfoComponent,
    IconUserComponent,
    IconaAddComponent,
    IconEyeComponent,
  ]
})

export class IconsComponentsModule { }
