import { Component } from '@angular/core';
import { UserService } from './servicies/user.service';

/**
 * Componente principal de la aplicacion
 *
 * @author Jhonier Gaviria M. - May. 12-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Guarda la info del usuario
   */
  public user: any;

  /**
   * Constructor de la clase
   * 
   * @param userService Servicio para trabajar con los usuarios
   */
  constructor(private userService: UserService) {
    this.user = this.userService.getStatusLogged();
  }
}
