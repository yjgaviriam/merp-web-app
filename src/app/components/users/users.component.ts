import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicies/user.service';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { RegisterUserModalComponent } from 'src/app/modals/register-user-modal/register-user-modal.component';
import { AppConstants } from 'src/app/app-constants';
import { User } from 'src/app/entities/user';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Componente para gestion de los usuarios de la aplicacion
 *
 * @author Jhonier Gaviria M. - May. 12-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  /**
   * Roles de la aplicacion
   */
  public readonly ROLES = AppConstants.ROLES;

  /**
   * Listado de usuarios
   */
  public users: User[];

  /**
   * Constructor de la clase
   *
   * @param userService Servicio para trabajar con los usuarios
   * @param matDialog Servicio para abrir modales con angular material
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private userService: UserService,
    private matDialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.users = [];
  }

  /**
   * @see {@link https://angular.io/guide/lifecycle-hooks#oninit}
   */
  public ngOnInit(): void {
    this.loadUsers();
  }

  /**
   * Permite llamar el modal para realizar el registro de un usuario
   */
  add() {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterUserModalComponent, {
      width: '450px',
      data: null
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadUsers();
      }
    });
  }

  /**
   * Permite eliminar un usuario
   *
   * @param userId Identificador del usuario a eliminar
   */
  public delete(userId: number): void {
    this.userService.deleteUser(userId).subscribe((response) => {
      // Mostramos el mensaje de registro y cerramos el modal
      this.toastr.success(response.data.message);
      this.loadUsers();
    }, (httpErrorResponse: HttpErrorResponse) => {
      // Validamos con los codigos de respuesta esperados en un error
      if (httpErrorResponse.status === AppConstants.HTTP_CODES.ERRORS.HTTP_BAD_REQUEST) {
        this.toastr.error(httpErrorResponse.error.data.message);
      } else {
        this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
      }
    });
  }

  /**
   * Se encarga de realizar el llamado para cargar los usuarios
   */
  private loadUsers(): void {
    this.userService.getAllUsers().subscribe((result) => {
      this.users = result.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
    });
  }

  /**
   * Permite llamar el modal para la actualizacion de un usuario
   *
   * @param user Usuario a actualizar
   */
  public update(user: User): void {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterUserModalComponent, {
      width: '450px',
      data: JSON.parse(JSON.stringify(user))
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadUsers();
      }
    });
  }
}
