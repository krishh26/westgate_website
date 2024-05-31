import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportAndAccountManagementComponent } from './support-and-account-management.component';

describe('SupportAndAccountManagementComponent', () => {
  let component: SupportAndAccountManagementComponent;
  let fixture: ComponentFixture<SupportAndAccountManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportAndAccountManagementComponent]
    });
    fixture = TestBed.createComponent(SupportAndAccountManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
