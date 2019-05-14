import { Component } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';
import { UserService } from 'src/app/servicies/user.service';

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
   * Guarda la info del usuario
   */
  public user: any;

  /**
   * Roles de la aplicacion
   */
  public readonly ROLES = AppConstants.ROLES;

  /**
   * Constructor de la clase
   *
   * @param userService Servicio para trabajar con los usuarios
   */
  constructor(private userService: UserService) {
    this.user = this.userService.getStatusLogged();
  }
}
