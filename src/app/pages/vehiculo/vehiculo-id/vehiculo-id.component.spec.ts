import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoIdComponent } from './vehiculo-id.component';

describe('VehiculoIdComponent', () => {
  let component: VehiculoIdComponent;
  let fixture: ComponentFixture<VehiculoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
