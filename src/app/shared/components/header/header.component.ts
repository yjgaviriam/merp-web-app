import { Component } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';

/**
 * Componente que contiene el header de la aplicacion
 *
 * @author Jhonier Gaviria M. - May. 09-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  /**
   * Nombre de la aplicacion
   */
  public readonly APP_NAME = AppConstants.APP_NAME;

  /**
   * Constructor de la clase
   */
  constructor() { }
}
