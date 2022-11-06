import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';
import { dataVehiculo } from './dataVehiculo-list';
import { totalVehiculo } from './Vehiculos-list';

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css']
})
export class VehiculosListComponent implements OnInit {
  vehiculo :Array<Vehiculo> = [];
  totalVehiculo: Array<totalVehiculo> = [];

  constructor(private VehiculoService: VehiculoService) { }

  getVehiculos(): void{
    this.VehiculoService.getVehiculo().subscribe((Vehiculo) =>{
      this.vehiculo = this.vehiculo;
    });
  }

  gettotalVehiculos(): Array<totalVehiculo>{
    return dataVehiculo;
  }

  ngOnInit() {
    this.getVehiculos();
    this.gettotalVehiculos();
  }

}
