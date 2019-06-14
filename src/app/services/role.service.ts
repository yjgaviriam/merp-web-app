import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../entities/role';

/**
 * Servicio para trabajar con los roles
 *
 * @author Jhonier Gaviria M. - May. 13-2019
 * @version 1.0.0
 */
@Injectable({
  providedIn: 'root'
})
export class RoleService {

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
   * Permite obtener todos los roles
   *
   * @return Un `Observable` con la respuesta del servidor
   */
  public getAllRoles(): Observable<{ data: Role[] }> {
    return this.httpClient.get<{ data: Role[] }>(this.URL_API + 'v1/roles/');
  }
}
