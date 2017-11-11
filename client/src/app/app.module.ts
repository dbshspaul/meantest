import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactComponent} from './contact/contact.component';
import {RouterModule, Routes} from "@angular/router";
import {contactRoutes} from "./contact/contact.route";

const ENTITY_STATES = [
  ...contactRoutes
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [RouterModule.forRoot(
    ENTITY_STATES,
    {enableTracing: true, useHash: true}
  ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
