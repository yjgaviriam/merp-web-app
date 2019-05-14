import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SubstationsComponent } from './components/substations/substations.component';
import { RegisterSubstationModalComponent } from './modals/register-substation-modal/register-substation-modal.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { RegisterUserModalComponent } from './modals/register-user-modal/register-user-modal.component';
import { CircuitsComponent } from './components/circuits/circuits.component';
import { RegisterCircuitModalComponent } from './modals/register-circuit-modal/register-circuit-modal.component';

/**
 * Modulo principal de la aplicacion
 *
 * @author Jhonier Gaviria M. - May. 09-2019
 * @version 1.0.0
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    SubstationsComponent,
    RegisterSubstationModalComponent,
    UsersComponent,
    RegisterUserModalComponent,
    CircuitsComponent,
    RegisterCircuitModalComponent
  ],
  entryComponents: [
    RegisterCircuitModalComponent,
    RegisterSubstationModalComponent,
    RegisterUserModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    MomentModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
