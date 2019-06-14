import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeTown } from '../entities/type-town';

/**
 * Servicio para trabajar con los tipos de localidad
 *
 * @author Jhonier Gaviria M. - May. 14-2019
 * @version 1.0.0
 */
@Injectable({
  providedIn: 'root'
})
export class TypeTownService {

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
   * Permite obtener todos los tipos de localidad
   *
   * @return Un `Observable` con la respuesta del servidor
   */
  public getAllTypeTowns(): Observable<{ data: TypeTown[] }> {
    return this.httpClient.get<{ data: TypeTown[] }>(this.URL_API + 'v1/type-towns/');
  }
}
