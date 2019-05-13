import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicies/user.service';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { RegisterUserModalComponent } from 'src/app/modals/register-user-modal/register-user-modal.component';
import { AppConstants } from 'src/app/app-constants';

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
   * Listado de usuarios
   */
  public users: any[];

  /**
   * Constructor de la clase
   *
   * @param substationService Servicio para trabajar con los usuarios
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

  add() {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterUserModalComponent, {
      width: '450px'
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadUsers();
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
      // Mensaje de error cuando no se puede cargar los usuarios, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
    });
  }
}
