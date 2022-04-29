import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductoListComponent } from './conducto-list.component';

describe('ConductoListComponent', () => {
  let component: ConductoListComponent;
  let fixture: ComponentFixture<ConductoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConductoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
