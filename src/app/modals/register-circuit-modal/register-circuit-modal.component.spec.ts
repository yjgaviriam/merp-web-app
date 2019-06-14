import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCircuitModalComponent } from './register-circuit-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { SubstationService } from 'src/app/services/substation.service';
import { CircuitService } from 'src/app/services/circuits.service';

fdescribe('RegisterCircuitModalComponent', () => {
  let component: RegisterCircuitModalComponent;
  let fixture: ComponentFixture<RegisterCircuitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCircuitModalComponent],
      imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        BrowserAnimationsModule,
        MatDialogModule,
        TranslateModule.forRoot()
      ],
      providers: [
        CircuitService,
        SubstationService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCircuitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
