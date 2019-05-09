import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

/**
 * Modulo que contiene los componentes que se replican en la aplicacion
 *
 * @author Jhonier Gaviria M. - Mar. 31-2019
 * @version 1.0.0
 */
@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule { }
