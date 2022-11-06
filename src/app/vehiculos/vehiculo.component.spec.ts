import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { VehiculosComponent } from './vehiculos.component';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculo';

describe('BookListComponent',() => {
  let component: VehiculosComponent;
  let fixture: ComponentFixture<VehiculosComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [VehiculosComponent],
      providers: [VehiculoService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosComponent);
    component = fixture.componentInstance;

    component.Vehiculo = [
      new Vehiculo(faker.lorem.sentence(), faker.id.id(), faker.marca.marca(), faker.datatype.linea)
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create',() => {
    expect(component).toBeTruthy();
  });

  it("Component has a table";() => {
    expect(debug.query(By.css("tboddy")).childNodes.length).toBeGreaterThan(0);
  });

  it('should have an add element',() => {
    const dd = debug.query(By.css('dd'));
    const content: HTMLElement = dd.nativeElement;
    expect(content.textContent).toEqual(component.Vehiculo[0].name)
  });

});

