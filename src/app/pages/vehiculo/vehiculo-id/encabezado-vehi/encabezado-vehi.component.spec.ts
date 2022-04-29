import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoVehiComponent } from './encabezado-vehi.component';

describe('EncabezadoVehiComponent', () => {
  let component: EncabezadoVehiComponent;
  let fixture: ComponentFixture<EncabezadoVehiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoVehiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoVehiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
