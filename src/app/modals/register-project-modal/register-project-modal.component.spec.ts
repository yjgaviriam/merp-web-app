import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProjectModalComponent } from './register-project-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { CircuitService } from 'src/app/services/circuits.service';
import { SubstationService } from 'src/app/services/substation.service';

describe('RegisterProjectModalComponent', () => {
  let component: RegisterProjectModalComponent;
  let fixture: ComponentFixture<RegisterProjectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProjectModalComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        ToastrModule.forRoot()
      ],
      providers: [
        CircuitService,
        SubstationService,
        {
          provide: MatDialogRef
        },
        {
          provide: MAT_DIALOG_DATA
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
