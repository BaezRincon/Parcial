/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehiculoService } from './vehiculo.service';
import {HttpClienteTestingModule} from "@angular/common/http/testing";

describe('Service: Vehiculo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClienteTestingModule],
      providers: [VehiculoService]
    });
  });

  it('should ...', inject([VehiculoService], (service: VehiculoService) => {
    expect(service).toBeTruthy();
  }));
});
