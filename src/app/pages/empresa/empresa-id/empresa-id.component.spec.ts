import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaIdComponent } from './empresa-id.component';

describe('EmpresaIdComponent', () => {
  let component: EmpresaIdComponent;
  let fixture: ComponentFixture<EmpresaIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
