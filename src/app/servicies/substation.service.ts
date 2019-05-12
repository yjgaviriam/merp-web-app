import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';

/**
 * Servicio para trabajar con las subestaciones
 *
 * @author Jhonier Gaviria M. - May. 12-2019
 * @version 1.0.0
 */
@Injectable({
  providedIn: 'root'
})
export class SubstationService {

  /**
   * Direccion del api para obtener los recursos
   */
  private readonly URL_API: string = AppConstants.API_URL + 'v1/substations/';

  /**
   * Constructor de la clase
   *
   * @param httpClient Servicio para realizar peticiones
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Permite obtener todas las subestaciones
   *
   * @return Un `Observable` con la respuesta del servidor
   */
  public getAllSubstations(): Observable<{ data: any[] }> {
    return this.httpClient.get<{ data: any[] }>(this.URL_API);
  }

  /**
   * Permite realizar el registro de la nueva subestacion
   *
   * @param code Codigo de la subestacion
   * @param name Nombre de la subestacion
   *
   * @return Un `Observable` con la respuesta de la operacion
   */
  public registerSubstation(code: string, name: string): Observable<any> {
    const httpParams = new FormData();
    httpParams.append('code', code);
    httpParams.append('name', name);

    return this.httpClient.post(this.URL_API + 'create', httpParams);
  }
}
