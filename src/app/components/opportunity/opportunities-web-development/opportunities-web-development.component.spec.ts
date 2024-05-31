import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesWebDevelopmentComponent } from './opportunities-web-development.component';

describe('OpportunitiesWebDevelopmentComponent', () => {
  let component: OpportunitiesWebDevelopmentComponent;
  let fixture: ComponentFixture<OpportunitiesWebDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpportunitiesWebDevelopmentComponent]
    });
    fixture = TestBed.createComponent(OpportunitiesWebDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
