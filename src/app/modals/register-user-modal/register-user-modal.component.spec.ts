import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserModalComponent } from './register-user-modal.component';

describe('RegisterUserModalComponent', () => {
  let component: RegisterUserModalComponent;
  let fixture: ComponentFixture<RegisterUserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterUserModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
