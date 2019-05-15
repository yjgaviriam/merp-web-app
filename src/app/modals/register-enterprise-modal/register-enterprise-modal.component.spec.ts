import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEnterpriseModalComponent } from './register-enterprise-modal.component';

describe('RegisterEnterpriseModalComponent', () => {
  let component: RegisterEnterpriseModalComponent;
  let fixture: ComponentFixture<RegisterEnterpriseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEnterpriseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEnterpriseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
