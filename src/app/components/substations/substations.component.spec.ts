import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstationsComponent } from './substations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { SubstationService } from 'src/app/services/substation.service';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('SubstationsComponent', () => {
  let component: SubstationsComponent;
  let fixture: ComponentFixture<SubstationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstationsComponent ],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        MatDialogModule,
        ToastrModule.forRoot()
      ],
      providers: [
        SubstationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
