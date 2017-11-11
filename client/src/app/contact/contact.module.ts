import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {contactRoutes} from "./contact.route";
import {ContactComponent} from "./contact.component";

const ENTITY_STATES = [
  ...contactRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(ENTITY_STATES, {useHash: true, enableTracing: true})
  ],
  declarations: [
    ContactComponent,
  ],
  entryComponents: [
    ContactComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactModule {
}
