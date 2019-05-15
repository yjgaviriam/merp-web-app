import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Enterprise } from 'src/app/entities/enterprise';
import { Contract } from 'src/app/entities/contract';
import { HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from 'src/app/app-constants';
import { EnterpriseService } from 'src/app/servicies/enterprise.service';
import { ContractService } from 'src/app/servicies/contract.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-contract-modal',
  templateUrl: './register-contract-modal.component.html',
  styleUrls: ['./register-contract-modal.component.css']
})
export class RegisterContractModalComponent {

  /**
   * Contiene la informacion del contrato
   */
  public contract: Contract;

  /**
   * Listado de empresas
   */
  public enterprises: Enterprise[];

  /**
   * Constructor de la clase
   *
   * @param dialogRef Referencia para poder devolver data al componente que llamo este modal
   * @param data Informacion del contrato
   * @param contractService Servicio para trabajar con los contratos
   * @param enterpriseService Servicio para trabajar con las empresas
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private dialogRef: MatDialogRef<RegisterContractModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Contract,
    private contractService: ContractService,
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
    // En caso de llegar la informacion
    if (data !== null) {
      this.contract = this.data;
    } else {
      this.contract = new Contract();
    }
  }

  /**
   * Realiza el guardado de un contrato
   */
  public saveContract(): void {
    this.contractService.saveContract(this.contract)
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
