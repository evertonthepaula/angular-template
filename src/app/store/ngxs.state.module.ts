import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

// ENVIRONMENT
import { environment } from 'src/environments/environment';

// STATE MODULES STATEMENTS
import { AuthState } from './auth/auth.state';
import { ThemeState } from './theme/theme.state';

@NgModule({
  imports: [
    NgxsModule.forRoot([
      AuthState,
      ThemeState
    ], { developmentMode: !environment.production }),
    NgxsStoragePluginModule.forRoot({
      key: ['auth', 'theme']
    }),
    NgxsRouterPluginModule.forRoot()
  ],
  exports: [NgxsModule, NgxsStoragePluginModule, NgxsRouterPluginModule]
})
export class NgxsStateModule { }
