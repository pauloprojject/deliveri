import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    ClienteComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    ClienteComponent
  ]
})
export class ClienteModule {
}
