import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCircuitModalComponent } from './register-circuit-modal.component';

describe('RegisterCircuitModalComponent', () => {
  let component: RegisterCircuitModalComponent;
  let fixture: ComponentFixture<RegisterCircuitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCircuitModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCircuitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
