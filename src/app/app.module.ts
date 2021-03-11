import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

// LOCALIZATION
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

// APP MODULES STATEMENTS
import { ContainersComponentsModule } from './containers/containers-components.module';
import { InterceptorsModule } from './services/interceptors/interceptors.module';
import { ViewsComponentsModule } from './views/views-components.module';
import { NgxsStateModule } from './store/ngxs.state.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgxsStateModule,
    AppRoutingModule,
    HttpClientModule,
    InterceptorsModule,
    ViewsComponentsModule,
    ContainersComponentsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
