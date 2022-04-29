import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSqlComponent } from './consulta-sql.component';

describe('ConsultaSqlComponent', () => {
  let component: ConsultaSqlComponent;
  let fixture: ComponentFixture<ConsultaSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaSqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
