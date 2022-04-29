import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoConduComponent } from './encabezado-condu.component';

describe('EncabezadoConduComponent', () => {
  let component: EncabezadoConduComponent;
  let fixture: ComponentFixture<EncabezadoConduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoConduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoConduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
