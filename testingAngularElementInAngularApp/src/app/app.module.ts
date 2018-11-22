import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import './shout-element.js'

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
