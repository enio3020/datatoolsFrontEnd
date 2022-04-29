import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConductorComponent } from './list-conductor.component';

describe('ListConductorComponent', () => {
  let component: ListConductorComponent;
  let fixture: ComponentFixture<ListConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
