import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgxFileSizeFormatterMbModule} from 'ngx-file-size-formatter-mb';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgxFileSizeFormatterMbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
