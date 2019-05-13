import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';
import { Substation } from '../entities/substation';

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
  private readonly URL_API: string = AppConstants.API_URL;

  /**
   * Constructor de la clase
   *
   * @param httpClient Servicio para realizar peticiones
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Permite realizar la eliminacion de una subestacion
   *
   * @param substationId Identificador de la subestacion
   *
   * @return Un `Observable` con la respuesta de la operacion
   */
  public deleteSubstation(substationId: number): Observable<any> {
    return this.httpClient.delete(this.URL_API + 'v1/substations/delete/' + substationId);
  }

  /**
   * Permite obtener todas las subestaciones
   *
   * @return Un `Observable` con la respuesta del servidor
   */
  public getAllSubstations(): Observable<{ data: any[] }> {
    return this.httpClient.get<{ data: any[] }>(`${this.URL_API}v1/substations/`);
  }

  /**
   * Permite realizar el registro/actualizacion de una subestacion
   *
   * @param substation Informacion de la subestacion
   *
   * @return Un `Observable` con la respuesta de la operacion
   */
  public saveSubstation(substation: Substation): Observable<any> {
    const httpParams = new FormData();
    httpParams.append('code', substation.code);
    httpParams.append('name', substation.name);

    // Si contiene id es una actualizacion
    if (substation.id) {
      httpParams.append('substationId', String(substation.id));
      return this.httpClient.put(this.URL_API + 'v1/substations/update', httpParams);
    }

    return this.httpClient.post(this.URL_API + 'v1/substations/create', httpParams);
  }
}
