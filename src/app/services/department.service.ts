import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../entities/department';

/**
 * Servicio para trabajar con los departamentos
 *
 * @author Jhonier Gaviria M. - May. 14-2019
 * @version 1.0.0
 */
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  /**
   * Direccion del api para obtener los recursos
   */
  private readonly URL_API: string = AppConstants.API_URL;

  /**
   * Constructor de la clase
   *
   * @param httpClient Servicio para realizar peticiones
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Permite obtener todos los departamentos
   *
   * @return Un `Observable` con la respuesta del servidor
   */
  public getAllDepartments(): Observable<{ data: Department[] }> {
    return this.httpClient.get<{ data: Department[] }>(this.URL_API + 'v1/departments/');
  }
}
