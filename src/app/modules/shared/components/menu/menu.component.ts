import { Component } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';

/**
 * Componente que contiene el menu lateral de la aplicacion
 *
 * @author Jhonier Gaviria M. - May. 09-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  /**
   * Nombre del usuario administrador
   */
  public readonly USER_ADMIN = AppConstants.USER_ADMIN;

  /**
   * Constructor de la clase
   */
  constructor() { }
}
