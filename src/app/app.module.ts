import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxCalendarModule } from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
