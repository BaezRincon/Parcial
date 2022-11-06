import { Component, OnInit } from '@angular/core';
import { dataVehiculo } from './dataVehiculo';
import { Vehiculo } from './vehiculo';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  Vehiculo: Array<Vehiculo> = [];
  constructor(private VehiculoService: VehiculoService) { }

  getVehiculoList(): Array<Vehiculo> {
    return dataVehiculo;
  }

  ngOnInit() {
    this.Vehiculo = this.getVehiculoList();
  }

}
