import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteTeammateComponent } from './invite-teammate.component';

describe('InviteTeammateComponent', () => {
  let component: InviteTeammateComponent;
  let fixture: ComponentFixture<InviteTeammateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteTeammateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteTeammateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
