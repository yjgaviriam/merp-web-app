import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enterprise } from '../entities/enterprise';

/**
 * Servicio para trabajar con las empresas
 *
 * @author Jhonier Gaviria M. - May. 13-2019
 * @version 1.0.0
 */
@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

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
   * Permite obtener todas las empresas
   *
   * @return Un `Observable` con la respuesta del servidor
   */
  public getAllEnterprises(): Observable<{ data: Enterprise[] }> {
    return this.httpClient.get<{ data: Enterprise[] }>(this.URL_API + 'v1/enterprises/');
  }
}
