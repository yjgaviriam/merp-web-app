import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppConstants } from 'src/app/app-constants';
import { MatDialog } from '@angular/material';
import { Circuit } from 'src/app/entities/circuit';
import { HttpErrorResponse } from '@angular/common/http';
import { CircuitService } from 'src/app/servicies/circuits.service';
import { RegisterCircuitModalComponent } from 'src/app/modals/register-circuit-modal/register-circuit-modal.component';

/**
 * Componente que contiene el listado de circuitos
 *
 * @author Jhonier Gaviria M. - May. 13-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.css']
})
export class CircuitsComponent implements OnInit {

  /**
   * Listado de circuitos
   */
  public circuits: any[];

  /**
   * Constructor de la clase
   *
   * @param circuitService Servicio para trabajar con los circuitos
   * @param matDialog Servicio para abrir modales con angular material
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private circuitService: CircuitService,
    private matDialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.circuits = [];
  }

  /**
   * @see {@link https://angular.io/guide/lifecycle-hooks#oninit}
   */
  public ngOnInit(): void {
    this.loadCircuits();
  }

  /**
   * Permite llamar el modal para realizar el registro de un circuito
   */
  public add(): void {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterCircuitModalComponent, {
      width: '450px',
      data: null
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadCircuits();
      }
    });
  }

  /**
   * Permite eliminar un circuito
   *
   * @param circuitId Identificador del circuito a eliminar
   */
  public delete(circuitId: number): void {
    this.circuitService.deleteCircuit(circuitId).subscribe((response) => {
      // Mostramos el mensaje de registro y cerramos el modal
      this.toastr.success(response.data.message);
      this.loadCircuits();
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
   * Se encarga de realizar el llamado para cargar los circuitos
   */
  private loadCircuits(): void {
    this.circuitService.getAllCircuits().subscribe((response) => {
      this.circuits = response.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar los circuitos, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.CANT_LOAD_SUBSTATIONS);
    });
  }

  /**
   * Permite llamar el modal para la actualizacion de un circuito
   *
   * @param circuit Subestacion a actualizar
   */
  public update(circuit: Circuit): void {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterCircuitModalComponent, {
      width: '450px',
      data: JSON.parse(JSON.stringify(circuit))
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadCircuits();
      }
    });
  }
}
