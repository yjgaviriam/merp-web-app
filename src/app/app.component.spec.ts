import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from './modules/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        HttpClientTestingModule,
        SharedModule,
        RouterModule
      ],
      providers: [UserService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
