import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppConstants } from 'src/app/app-constants';
import { MatDialog } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { ProjectService } from 'src/app/servicies/project.service';
import { RegisterProjectModalComponent } from 'src/app/modals/register-project-modal/register-project-modal.component';
import { Project } from 'src/app/entities/project';
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/servicies/user.service';

/**
 * Componente que contiene el listado de proyectos
 *
 * @author Jhonier Gaviria M. - May. 14-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  /**
   * Listado de proyectos
   */
  public projects: Project[];

  /**
   * Roles de la aplicacion
   */
  public readonly ROLES = AppConstants.ROLES;

  /**
   * Tipos de localidad de la aplicacion
   */
  public readonly TYPES_TOWNS = AppConstants.TYPES_TOWNS;

  /**
   * Usuario logueado en la aplicacion
   */
  public user: User;

  /**
   * Constructor de la clase
   *
   * @param projectService Servicio para trabajar con los proyectos
   * @param projectService Servicio para trabajar con los usuarios
   * @param matDialog Servicio para abrir modales con angular material
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    private matDialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.projects = [];
    this.user = this.userService.getStatusLogged();
  }

  /**
   * @see {@link https://angular.io/guide/lifecycle-hooks#oninit}
   */
  public ngOnInit(): void {
    this.loadProjects();
  }

  /**
   * Permite llamar el modal para realizar el registro de un projecto
   */
  public add(): void {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterProjectModalComponent, {
      width: '450px',
      data: null
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadProjects();
      }
    });
  }

  /**
   * Permite eliminar un Proyecto
   *
   * @param projectId Identificador del proyecto a eliminar
   */
  public delete(projectId: number): void {
    this.projectService.deleteProject(projectId).subscribe((response) => {
      // Mostramos el mensaje de registro y cerramos el modal
      this.toastr.success(response.data.message);
      this.loadProjects();
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
   * Se encarga de realizar el llamado para cargar los proyectos
   */
  private loadProjects(): void {
    this.projectService.getAllProjects().subscribe((response) => {
      this.projects = response.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
    });
  }

  /**
   * Permite llamar el modal para la actualizacion de un proyecto
   *
   * @param project Proyecto a actualizar
   */
  public update(project: Project): void {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterProjectModalComponent, {
      width: '450px',
      data: JSON.parse(JSON.stringify(project))
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadProjects();
      }
    });
  }
}
