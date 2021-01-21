import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

// Internationalization daty - PL
import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePl);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL' }// Internationalization całej aplikacji na PL
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
