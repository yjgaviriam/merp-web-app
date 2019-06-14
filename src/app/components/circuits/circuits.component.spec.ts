import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitsComponent } from './circuits.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CircuitService } from 'src/app/services/circuits.service';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

describe('CircuitsComponent', () => {
  let component: CircuitsComponent;
  let fixture: ComponentFixture<CircuitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CircuitsComponent],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        MatDialogModule,
        ToastrModule.forRoot()
      ],
      providers: [
        CircuitService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
