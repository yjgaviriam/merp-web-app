import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from 'src/app/app-constants';
import { Enterprise } from 'src/app/entities/enterprise';
import { EnterpriseService } from 'src/app/servicies/enterprise.service';

/**
 * Modal para registrar una nueva empresa
 *
 * @author Jhonier Gaviria M. - May. 15-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-register-enterprise-modal',
  templateUrl: './register-enterprise-modal.component.html',
  styleUrls: ['./register-enterprise-modal.component.css']
})
export class RegisterEnterpriseModalComponent {

  /**
   * Contiene la informacion de la empresa
   */
  public enterprise: Enterprise;

  /**
   * Constructor de la clase
   *
   * @param dialogRef Referencia para poder devolver data al componente que llamo este modal
   * @param data Informacion de la empresa
   * @param enterpriseService Servicio para trabajar con las empresas
   * @param substationService Servicio para trabajar con las subestaciones
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private dialogRef: MatDialogRef<RegisterEnterpriseModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Enterprise,
    private enterpriseService: EnterpriseService,
    private toastr: ToastrService
  ) {
    // En caso de llegar la informacion
    if (data !== null) {
      this.enterprise = this.data;
    } else {
      this.enterprise = new Enterprise();
    }
  }

  /**
   * Realiza el guardado de una empresa
   */
  public saveEnterprise(): void {
    this.enterpriseService.saveEnterprise(this.enterprise)
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
