import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {ContactModule} from "./contact/contact.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    ContactModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
