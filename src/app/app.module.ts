import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './navbar/navbar.module'
import { MatTabsModule } from "@angular/material/tabs";
import {ClienteModule} from "./cliente/cliente.module";
import {RestauranteModule} from "./restaurante/restaurante.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    MatTabsModule,
    ClienteModule,
    RestauranteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
