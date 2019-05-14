import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/servicies/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/entities/user';
import { HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from 'src/app/app-constants';
import { Role } from 'src/app/entities/role';
import { Enterprise } from 'src/app/entities/enterprise';
import { RoleService } from 'src/app/servicies/role.service';
import { EnterpriseService } from 'src/app/servicies/enterprise.service';

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
   * Listado de empresas
   */
  public enterprises: Enterprise[];

  /**
   * Almacena la clave del usuario
   */
  public password: string;

  /**
   * Listado de roles
   */
  public roles: Role[];

  /**
   * Contiene la informacion del usuario
   */
  public user: User;

  /**
   * Constructor de la clase
   *
   * @param dialogRef Referencia para poder devolver data al componente que llamo este modal
   * @param data Informacion del usuario
   * @param userService Servicio para trabajar con los usuarios
   * @param roleService Servicio para trabajar con los roles
   * @param enterpriseService Servicio para trabajar con las empresas
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private dialogRef: MatDialogRef<RegisterUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: User,
    private userService: UserService,
    private roleService: RoleService,
    private enterpriseService: EnterpriseService,
    private toastr: ToastrService
  ) {
    // Se cargan las empresas
    this.enterpriseService.getAllEnterprises().subscribe((response) => {
      this.enterprises = response.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
    });

    // Se cargan los roles
    this.roleService.getAllRoles().subscribe((response) => {
      this.roles = response.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
    });
    // En caso de llegar la informacion
    if (data !== null) {
      this.user = this.data;
    } else {
      this.user = new User();
    }
  }

  /**
   * Realiza el registro de un usuario
   */
  public saveUser(): void {
    this.userService.saveUser(this.user, this.password).subscribe((response) => {
      // Mostramos el mensaje de registro y cerramos el modal
      this.toastr.success(response.data.message);
      this.dialogRef.close(true);
    }, (httpErrorResponse: HttpErrorResponse) => {
      // Validamos con los codigos de respuesta esperados en un error
      if (httpErrorResponse.status === AppConstants.HTTP_CODES.ERRORS.HTTP_BAD_REQUEST) {
        this.toastr.error(httpErrorResponse.error.data.message);
      } else {
        this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
      }
    });
  }

}
