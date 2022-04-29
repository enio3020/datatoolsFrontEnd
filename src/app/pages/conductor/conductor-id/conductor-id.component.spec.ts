import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorIdComponent } from './conductor-id.component';

describe('ConductorIdComponent', () => {
  let component: ConductorIdComponent;
  let fixture: ComponentFixture<ConductorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConductorIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
