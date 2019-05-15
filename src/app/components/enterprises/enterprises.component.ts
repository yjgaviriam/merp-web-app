import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppConstants } from 'src/app/app-constants';
import { MatDialog } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { Enterprise } from 'src/app/entities/enterprise';
import { RegisterEnterpriseModalComponent } from 'src/app/modals/register-enterprise-modal/register-enterprise-modal.component';
import { EnterpriseService } from 'src/app/servicies/enterprise.service';

/**
 * Componente que contiene el listado de empresas
 *
 * @author Jhonier Gaviria M. - May. 13-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent implements OnInit {

  /**
   * Listado de empresas
   */
  public enterprises: Enterprise[];

  /**
   * Constructor de la clase
   *
   * @param enterpriseService Servicio para trabajar con las empresas
   * @param matDialog Servicio para abrir modales con angular material
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private enterpriseService: EnterpriseService,
    private matDialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.enterprises = [];
  }

  /**
   * @see {@link https://angular.io/guide/lifecycle-hooks#oninit}
   */
  public ngOnInit(): void {
    this.loadEnterprises();
  }

  /**
   * Permite llamar el modal para realizar el registro de un empresa
   */
  public add(): void {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterEnterpriseModalComponent, {
      width: '450px',
      data: null
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadEnterprises();
      }
    });
  }

  /**
   * Permite eliminar un empresa
   *
   * @param enterpriseId Identificador de la empresa a eliminar
   */
  public delete(enterpriseId: number): void {
    this.enterpriseService.deleteEnterprise(enterpriseId).subscribe((response) => {
      // Mostramos el mensaje de registro y cerramos el modal
      this.toastr.success(response.data.message);
      this.loadEnterprises();
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
   * Se encarga de realizar el llamado para cargar las empresas
   */
  private loadEnterprises(): void {
    this.enterpriseService.getAllEnterprises().subscribe((response) => {
      this.enterprises = response.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
    });
  }

  /**
   * Permite llamar el modal para la actualizacion de una empresa
   *
   * @param enterprise Empresa a actualizar
   */
  public update(enterprise: Enterprise): void {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterEnterpriseModalComponent, {
      width: '450px',
      data: JSON.parse(JSON.stringify(enterprise))
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadEnterprises();
      }
    });
  }
}
