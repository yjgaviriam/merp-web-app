import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProjectModalComponent } from './register-project-modal.component';

describe('RegisterProjectModalComponent', () => {
  let component: RegisterProjectModalComponent;
  let fixture: ComponentFixture<RegisterProjectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProjectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
