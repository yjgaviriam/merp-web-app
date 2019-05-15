import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCitiesModalComponent } from './register-cities-modal.component';

describe('RegisterCitiesModalComponent', () => {
  let component: RegisterCitiesModalComponent;
  let fixture: ComponentFixture<RegisterCitiesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCitiesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCitiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
