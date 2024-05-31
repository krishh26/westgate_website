import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingModalComponent } from './working-modal.component';

describe('WorkingModalComponent', () => {
  let component: WorkingModalComponent;
  let fixture: ComponentFixture<WorkingModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkingModalComponent]
    });
    fixture = TestBed.createComponent(WorkingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
