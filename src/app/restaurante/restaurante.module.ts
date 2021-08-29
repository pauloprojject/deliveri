import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteComponent } from './restaurante/restaurante.component';



@NgModule({
  declarations: [
    RestauranteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RestauranteComponent
  ]
})
export class RestauranteModule { }
