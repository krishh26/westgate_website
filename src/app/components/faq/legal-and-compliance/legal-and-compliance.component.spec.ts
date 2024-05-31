import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalAndComplianceComponent } from './legal-and-compliance.component';

describe('LegalAndComplianceComponent', () => {
  let component: LegalAndComplianceComponent;
  let fixture: ComponentFixture<LegalAndComplianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalAndComplianceComponent]
    });
    fixture = TestBed.createComponent(LegalAndComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
