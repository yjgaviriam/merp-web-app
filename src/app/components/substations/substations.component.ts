import { Component, OnInit } from '@angular/core';
import { SubstationService } from 'src/app/services/substation.service';
import { ToastrService } from 'ngx-toastr';
import { AppConstants } from 'src/app/app-constants';
import { MatDialog } from '@angular/material';
import { RegisterSubstationModalComponent } from 'src/app/modals/register-substation-modal/register-substation-modal.component';
import { Substation } from 'src/app/entities/substation';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Componente que contiene el listado de subestaciones
 *
 * @author Jhonier Gaviria M. - May. 11-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-substations',
  templateUrl: './substations.component.html',
  styleUrls: ['./substations.component.css']
})
export class SubstationsComponent implements OnInit {

  /**
   * Listado de subestaciones
   */
  public substations: Substation[];

  /**
   * Constructor de la clase
   *
   * @param substationService Servicio para trabajar con las subestaciones
   * @param matDialog Servicio para abrir modales con angular material
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private substationService: SubstationService,
    private matDialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.substations = [];
  }

  /**
   * @see {@link https://angular.io/guide/lifecycle-hooks#oninit}
   */
  public ngOnInit(): void {
    this.loadSubstations();
  }

  /**
   * Permite llamar el modal para realizar el registro de una subestacion
   */
  public add(): void {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterSubstationModalComponent, {
      width: '450px',
      data: null
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadSubstations();
      }
    });
  }

  /**
   * Permite eliminar una subestacion
   *
   * @param substationId Identificador de la subestacion a eliminar
   */
  public delete(substationId: number): void {
    this.substationService.deleteSubstation(substationId).subscribe((response) => {
      // Mostramos el mensaje de registro y cerramos el modal
      this.toastr.success(response.data.message);
      this.loadSubstations();
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
   * Se encarga de realizar el llamado para cargar las subestaciones
   */
  private loadSubstations(): void {
    this.substationService.getAllSubstations().subscribe((response) => {
      this.substations = response.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.CANT_LOAD_SUBSTATIONS);
    });
  }

  /**
   * Permite llamar el modal para la actualizacion de una subestacion
   *
   * @param substation Subestacion a actualizar
   */
  public update(substation: Substation): void {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterSubstationModalComponent, {
      width: '450px',
      data: JSON.parse(JSON.stringify(substation))
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadSubstations();
      }
    });
  }
}
