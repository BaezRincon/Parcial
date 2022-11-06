import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class VehiculoService {
  private apiUrl = environment.baseUrl + 'Vehiculo.json';

constructor(private http: HttpClient) { }

getVehiculo(): Observable<Vehiculo[]>{
  return this.http.get<Vehiculo[]>(this.apiUrl);
}
}
