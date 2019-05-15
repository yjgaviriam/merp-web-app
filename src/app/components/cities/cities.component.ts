import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from 'src/app/app-constants';
import { RegisterCitiesModalComponent } from 'src/app/modals/register-cities-modal/register-cities-modal.component';
import { CityService } from 'src/app/servicies/city.service';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { City } from 'src/app/entities/city';

/**
 * Componente para gestion de los municipios de la aplicacion
 *
 * @author Jhonier Gaviria M. - May. 14-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  /**
   * Listado de municipios
   */
  public cities: City[];

  /**
   * Constructor de la clase
   *
   * @param cityService Servicio para trabajar con los municipios
   * @param matDialog Servicio para abrir modales con angular material
   * @param toastr Servicio para mostrar mensajes
   */
  constructor(
    private cityService: CityService,
    private matDialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.cities = [];
  }

  /**
   * @see {@link https://angular.io/guide/lifecycle-hooks#oninit}
   */
  public ngOnInit(): void {
    this.loadCities();
  }

  /**
   * Permite llamar el modal para realizar el registro de un municipio
   */
  add() {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterCitiesModalComponent, {
      width: '450px',
      data: null
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadCities();
      }
    });
  }

  /**
   * Permite eliminar un municipio
   *
   * @param cityId Identificador del municipio a eliminar
   */
  public delete(cityId: number): void {
    this.cityService.deleteCity(cityId).subscribe((response) => {
      // Mostramos el mensaje de registro y cerramos el modal
      this.toastr.success(response.data.message);
      this.loadCities();
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
   * Se encarga de realizar el llamado para cargar los municipios
   */
  private loadCities(): void {
    this.cityService.getAllCities().subscribe((result) => {
      this.cities = result.data;
    }, () => {
      // Mensaje de error cuando no se puede cargar, falta de conexion a internet
      this.toastr.error(AppConstants.MESSAGES.ERROR.HTTP_GENERAL_MESSAGE);
    });
  }

  /**
   * Permite llamar el modal para la actualizacion de un municipio
   *
   * @param city Usuario a actualizar
   */
  public update(city: City): void {
    // Abrimos el modal y le enviamos el valor de la posicion que se encuentra libre
    const dialogRef = this.matDialog.open(RegisterCitiesModalComponent, {
      width: '450px',
      data: JSON.parse(JSON.stringify(city))
    });

    // Al cerrar el modal recargamos si tenemos respuesta
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadCities();
      }
    });
  }
}
