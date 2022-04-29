import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoEmprComponent } from './encabezado-empr.component';

describe('EncabezadoEmprComponent', () => {
  let component: EncabezadoEmprComponent;
  let fixture: ComponentFixture<EncabezadoEmprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoEmprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoEmprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
