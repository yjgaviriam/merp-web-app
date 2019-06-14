import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppConstants } from 'src/app/app-constants';
import { MatDialog } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { Contract } from 'src/app/entities/contract';
import { ContractService } from 'src/app/services/contract.service';
import { RegisterContractModalComponent } from 'src/app/modals/register-contract-modal/register-contract-modal.component';

/**
 * Componente que contiene el listado de contratos
 *
 * @author Jhonier Gaviria M. - May. 15-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  /**
   * Listado de contratos
   */
  public contracts: Contract[];

  /**
   * Constructor de la clase
   *
   * @param contractService Servicio para trabajar con los contratos
   * @param matDialog Servicio para abrir modales con angular material
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private contractService: ContractService,
    private matDialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.contracts = [];
  }

  /**
   * @see {@link https://angular.io/guide/lifecycle-hooks#oninit}
   */
  public ngOnInit(): void {
    this.loadContracts();
  }

  /**
   * Permite llamar el modal para realizar el registro de un contrato
   */
  public add(): void {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterContractModalComponent, {
      width: '450px',
      data: null
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadContracts();
      }
    });
  }

  /**
   * Permite eliminar un contrato
   *
   * @param contractId Identificador del contrato a eliminar
   */
  public delete(contractId: number): void {
    this.contractService.deleteContract(contractId).subscribe((response) => {
      this.loadContracts();
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
   * Se encarga de realizar el llamado para cargar los contratos
   */
  private loadContracts(): void {
    this.contractService.getAllContracts().subscribe((response) => {
      this.contracts = response.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
    });
  }

  /**
   * Permite llamar el modal para la actualizacion de un contrato
   *
   * @param contract Contrato a actualizar
   */
  public update(contract: Contract): void {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterContractModalComponent, {
      width: '450px',
      data: JSON.parse(JSON.stringify(contract))
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadContracts();
      }
    });
  }
}
