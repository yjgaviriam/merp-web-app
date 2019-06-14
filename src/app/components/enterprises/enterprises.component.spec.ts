import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterprisesComponent } from './enterprises.component';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';

describe('EnterprisesComponent', () => {
  let component: EnterprisesComponent;
  let fixture: ComponentFixture<EnterprisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterprisesComponent ],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        MatDialogModule,
        ToastrModule.forRoot()
      ],
      providers: [
        EnterpriseService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
