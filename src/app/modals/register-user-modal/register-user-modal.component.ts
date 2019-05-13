import { Component } from '@angular/core';
import { UserService } from 'src/app/servicies/user.service';
import { MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/entities/user';
import { HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from 'src/app/app-constants';

/**
 * Modal para registrar un nuevo usuario
 *
 * @author Jhonier Gaviria M. - May. 12-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-register-user-modal',
  templateUrl: './register-user-modal.component.html',
  styleUrls: ['./register-user-modal.component.css']
})
export class RegisterUserModalComponent {

  /**
   * Contiene la informacion del usuario
   */
  public user: User;

  /**
   * Constructor de la clase
   *
   * @param dialogRef Referencia para poder devolver data al componente que llamo este modal
   * @param substationService Servicio para trabajar con los usuarios
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private dialogRef: MatDialogRef<RegisterUserModalComponent>,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  /**
   * Realiza el registro de un usuario
   */
  public registerUser(): void {
    this.userService.registerUser(this.user).subscribe((response) => {
      // Mostramos el mensaje de registro y cerramos el modal
      this.toastr.success(response.data.message);
      this.dialogRef.close(true);
    }, (httpErrorResponse: HttpErrorResponse) => {
      // Validamos con los codigos de respuesta esperados en un error
      if (httpErrorResponse.status === AppConstants.HTTP_CODES.ERRORS.HTTP_BAD_REQUEST) {
        this.toastr.error(httpErrorResponse.message);
      } else {
        this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
      }
    });
  }

}
