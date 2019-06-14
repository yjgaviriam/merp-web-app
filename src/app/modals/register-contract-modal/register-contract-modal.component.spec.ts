import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContractModalComponent } from './register-contract-modal.component';

describe('RegisterContractModalComponent', () => {
  let component: RegisterContractModalComponent;
  let fixture: ComponentFixture<RegisterContractModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterContractModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterContractModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
