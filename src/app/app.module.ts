import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent1Component } from './simple-component1/simple-component1.component';
import { SimpleComponent2Component } from './simple-component2/simple-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent1Component,
    SimpleComponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
