import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { SubstationService } from 'src/app/servicies/substation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from 'src/app/app-constants';
import { Substation } from 'src/app/entities/substation';

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
   * Contiene la informacion de la subestacion
   */
  public substation: Substation;

  /**
   * Constructor de la clase
   *
   * @param dialogRef Referencia para poder devolver data al componente que llamo este modal
   * @param data Informacion de la subestacion
   * @param substationService Servicio para trabajar con las subestaciones
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private dialogRef: MatDialogRef<RegisterSubstationModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Substation,
    private substationService: SubstationService,
    private toastr: ToastrService
  ) {
    // En caso de llegar la informacion
    if (data !== null) {
      this.substation = this.data;
    } else {
      this.substation = new Substation();
    }
  }

  /**
   * Realiza el guardado de una subestacion
   */
  public saveSubstation(): void {
    this.substationService.saveSubstation(this.substation)
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
