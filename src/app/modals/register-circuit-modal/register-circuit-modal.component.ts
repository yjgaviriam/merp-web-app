import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from 'src/app/app-constants';
import { Circuit } from 'src/app/entities/circuit';
import { CircuitService } from 'src/app/servicies/circuits.service';
import { Substation } from 'src/app/entities/substation';
import { SubstationService } from 'src/app/servicies/substation.service';

/**
 * Modal para registrar un nuevo circuito
 *
 * @author Jhonier Gaviria M. - May. 13-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-register-circuit-modal',
  templateUrl: './register-circuit-modal.component.html',
  styleUrls: ['./register-circuit-modal.component.css']
})
export class RegisterCircuitModalComponent {

  /**
   * Contiene la informacion del circuito
   */
  public circuit: Circuit;

  /**
   * Listado de substaciones
   */
  public substations: Substation[];

  /**
   * Constructor de la clase
   *
   * @param dialogRef Referencia para poder devolver data al componente que llamo este modal
   * @param data Informacion del circuito
   * @param circuitService Servicio para trabajar con los circuitos
   * @param substationService Servicio para trabajar con las subestaciones
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private dialogRef: MatDialogRef<RegisterCircuitModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Circuit,
    private circuitService: CircuitService,
    private substationService: SubstationService,
    private toastr: ToastrService
  ) {
    // Se cargan las subestaciones
    this.substationService.getAllSubstations().subscribe((response) => {
      this.substations = response.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.CANT_LOAD_SUBSTATIONS);
    });
    // En caso de llegar la informacion
    if (data !== null) {
      this.circuit = this.data;
    } else {
      this.circuit = new Circuit();
    }
  }

  /**
   * Realiza el guardado de un circuito
   */
  public saveCircuit(): void {
    this.circuitService.saveCircuit(this.circuit)
      .subscribe((response) => {
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
