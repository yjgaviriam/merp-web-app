import { Component, OnInit, HostListener } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/servicies/user.service';
import { AppConstants } from 'src/app/app-constants';
import { ToastrService } from 'ngx-toastr';

/**
 * Componente para inicio de sesion
 *
 * @author Jhonier Gaviria M. - May. 12-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * Almacenara el tamaño de pantalla
   */
  public clientHeight: string;

  /**
   * Username del usuario
   */
  public username: string;

  /**
   * Clave del usuario
   */
  public password: string;

  /**
   * Contructor de la clase
   *
   * @param userService Servicio para trabajar con los usuarios
   */
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  /**
   * @see {@link https://angular.io/guide/lifecycle-hooks#oninit}
   */
  ngOnInit(): void {
    this.clientHeight = (window.innerHeight - 50) + 'px';
  }

  /**
   * Escucha el evento de redimensionar la pantalla
   */
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.clientHeight = (window.innerHeight - 50) + 'px';
  }

  /**
   * Permite realizar el llamado de inicio de sesion
   */
  public login(): void {
    this.userService.login(this.username, this.password).subscribe((response: any) => {
      this.userService.setStatusLogged(response.data.user, response.data.token);
      location.reload();
    }, (httpErrorResponse: HttpErrorResponse) => {
      // Validamos con los codigos de respuesta esperados en un error
      if (httpErrorResponse.status === AppConstants.HTTP_CODES.ERRORS.HTTP_UNAUTHORIZED) {
        this.toastr.error(httpErrorResponse.error.data.message);
      } else {
        this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
      }
    });
  }

}
