import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVehiculoEmprComponent } from './list-vehiculo-empr.component';

describe('ListVehiculoEmprComponent', () => {
  let component: ListVehiculoEmprComponent;
  let fixture: ComponentFixture<ListVehiculoEmprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVehiculoEmprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehiculoEmprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
