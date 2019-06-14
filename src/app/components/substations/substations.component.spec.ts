import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstationsComponent } from './substations.component';

describe('SubstationsComponent', () => {
  let component: SubstationsComponent;
  let fixture: ComponentFixture<SubstationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
