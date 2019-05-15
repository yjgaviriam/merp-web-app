import { Component, Inject } from '@angular/core';
import { Department } from 'src/app/entities/department';
import { City } from 'src/app/entities/city';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CityService } from 'src/app/servicies/city.service';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/servicies/department.service';
import { AppConstants } from 'src/app/app-constants';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Modal para registrar un nuevo municipio
 *
 * @author Jhonier Gaviria M. - May. 14-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-register-cities-modal',
  templateUrl: './register-cities-modal.component.html',
  styleUrls: ['./register-cities-modal.component.css']
})
export class RegisterCitiesModalComponent {

  /**
   * Listado de departamentos
   */
  public departments: Department[];

  /**
   * Contiene la informacion del municipio
   */
  public city: City;

  /**
   * Constructor de la clase
   *
   * @param dialogRef Referencia para poder devolver data al componente que llamo este modal
   * @param data Informacion del municipio
   * @param cityService Servicio para trabajar con los municipios
   * @param departmentService Servicio para trabajar con los departamentos
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private dialogRef: MatDialogRef<RegisterCitiesModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: City,
    private cityService: CityService,
    private departmentService: DepartmentService,
    private toastr: ToastrService
  ) {
    // Se cargan los departamentos
    this.departmentService.getAllDepartments().subscribe((response) => {
      this.departments = response.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
    });
    // En caso de llegar la informacion
    if (data !== null) {
      this.city = this.data;
    } else {
      this.city = new City();
    }
  }

  /**
   * Realiza el registro de un municipio
   */
  public saveCity(): void {
    this.cityService.saveCity(this.city).subscribe((response) => {
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
