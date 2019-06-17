import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from 'src/app/app-constants';
import { Project } from 'src/app/entities/project';
import { CircuitService } from 'src/app/services/circuits.service';
import { Circuit } from 'src/app/entities/circuit';
import { ProjectService } from 'src/app/services/project.service';
import { CityService } from 'src/app/services/city.service';
import { City } from 'src/app/entities/city';
import { TypeNetwork } from 'src/app/entities/type-network';
import { TypeTown } from 'src/app/entities/type-town';
import { TypeNetworkService } from 'src/app/services/type-network.service';
import { TypeTownService } from 'src/app/services/type-town.service';

/**
 * Modal para registrar un nuevo proyecto
 *
 * @author Jhonier Gaviria M. - May. 14-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-register-project-modal',
  templateUrl: './register-project-modal.component.html',
  styleUrls: ['./register-project-modal.component.css']
})
export class RegisterProjectModalComponent {

  /**
   * Listado de circuitos
   */
  public circuits: Circuit[];

  /**
   * Listado de municipios
   */
  public cities: City[];

  /**
   * Contiene la informacion del proyecto
   */
  public project: Project;

  /**
   * Listado de tipos de red
   */
  public typeNetworks: TypeNetwork[];

  /**
   * Listado de tipos de localidad
   */
  public typeTowns: TypeTown[];

  /**
   * Constructor de la clase
   *
   * @param dialogRef Referencia para poder devolver data al componente que llamo este modal
   * @param data Informacion del circuito
   * @param projectService Servicio para trabajar con los proyectos
   * @param circuitService Servicio para trabajar con los circuitos
   * @param cityService Servicio para trabajar con los municipios
   * @param typeNetworkService Servicio para trabajar con los tipos de red
   * @param typeTownService Servicio para trabajar con los tipos de localidad
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private dialogRef: MatDialogRef<RegisterProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Project,
    private projectService: ProjectService,
    private circuitService: CircuitService,
    private cityService: CityService,
    private typeNetworkService: TypeNetworkService,
    private typeTownService: TypeTownService,
    private toastr: ToastrService
  ) {
    // Se cargan los circuitos
    this.circuitService.getAllCircuits().subscribe((response) => {
      this.circuits = response.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
    });

    // Se cargan los municipios
    this.cityService.getAllCities().subscribe((response) => {
      this.cities = response.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
    });

    // Se cargan los tipos de red
    this.typeNetworkService.getAllTypeNetworks().subscribe((response) => {
      this.typeNetworks = response.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
    });

    // Se cargan los tipos de localidad
    this.typeTownService.getAllTypeTowns().subscribe((response) => {
      this.typeTowns = response.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
    });
    // Se asigna la informacion en caso de llegar la informacion o se crea una nueva instancia
    this.project = this.data || new Project();
  }

  /**
   * Realiza el guardado de un proyecto
   */
  public saveProject(): void {
    this.projectService.saveProject(this.project)
      .subscribe((response) => {
        // Mostramos el mensaje de registro y cerramos el modal
        this.toastr.info(response.data.message, null, { timeOut: AppConstants.TIME_OUT_TOAST_LARGE });
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
