import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSubstationModalComponent } from './register-substation-modal.component';

describe('RegisterSubstationModalComponent', () => {
  let component: RegisterSubstationModalComponent;
  let fixture: ComponentFixture<RegisterSubstationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSubstationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSubstationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
