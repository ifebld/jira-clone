import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFiltersComponent } from './create-filters.component';

describe('CreateFiltersComponent', () => {
  let component: CreateFiltersComponent;
  let fixture: ComponentFixture<CreateFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
