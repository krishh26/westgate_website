import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipOpportunityComponent } from './partnership-opportunity.component';

describe('PartnershipOpportunityComponent', () => {
  let component: PartnershipOpportunityComponent;
  let fixture: ComponentFixture<PartnershipOpportunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnershipOpportunityComponent]
    });
    fixture = TestBed.createComponent(PartnershipOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
