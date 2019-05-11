import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/**
 * Permite cargar las traducciones segun el idioma encontrado por la peticion
 *
 * @param http Servicio para manejo de peticiones http
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

/**
 * Modulo que contiene los componentes que se replican en la aplicacion
 *
 * @author Jhonier Gaviria M. - May. 09-2019
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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    TranslateModule
  ]
})
export class SharedModule {

  /**
   * Constructor de la clase
   *
   * @param translate Servicio para traduccion
   */
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }
}
