import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { SubstationService } from 'src/app/servicies/substation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from 'src/app/app-constants';

/**
 * Modal para registrar una nueva subestacion
 *
 * @author Jhonier Gaviria M. - May. 12-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-register-substation-modal',
  templateUrl: './register-substation-modal.component.html',
  styleUrls: ['./register-substation-modal.component.css']
})
export class RegisterSubstationModalComponent {

  /**
   * Codigo de la subestacion
   */
  public code: string;

  /**
   * Nombre de la subestacion
   */
  public name: string;

  /**
   * Constructor de la clase
   *
   * @param dialogRef Referencia para poder devolver data al componente que llamo este modal
   * @param substationService Servicio para trabajar con las subestaciones
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private dialogRef: MatDialogRef<RegisterSubstationModalComponent>,
    private substationService: SubstationService,
    private toastr: ToastrService
  ) { }

  /**
   * Realiza el registro de una subestacion
   */
  public registerSubstation(): void {
    this.substationService.registerSubstation(this.code, this.name).subscribe((response) => {
      // Mostramos el mensaje de registro y cerramos el modal
      this.toastr.success(response.data.message);
      this.dialogRef.close(true);
    }, (httpErrorResponse: HttpErrorResponse) => {
      // Validamos con los codigos de respuesta esperados en un error
      if (httpErrorResponse.status === AppConstants.HTTP_CODES.ERRORS.HTTP_CONFLICT ||
        httpErrorResponse.status === AppConstants.HTTP_CODES.ERRORS.HTTP_BAD_REQUEST) {
        this.toastr.error(httpErrorResponse.message);
      } else {
        this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
      }
    });
  }

}
