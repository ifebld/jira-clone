import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFiltersComponent } from './view-filters.component';

describe('ViewFiltersComponent', () => {
  let component: ViewFiltersComponent;
  let fixture: ComponentFixture<ViewFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
