import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosListComponent } from './vehiculos-list/vehiculos-list.component';
import { VehiculosComponent } from './vehiculos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehiculosComponent, VehiculosListComponent],
  exports: [VehiculosComponent, VehiculosListComponent]
})
export class VehiculosModule { }
