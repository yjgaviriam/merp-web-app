import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../entities/city';

/**
 * Servicio para trabajar con los municipios
 *
 * @author Jhonier Gaviria M. - May. 14-2019
 * @version 1.0.0
 */
@Injectable({
  providedIn: 'root'
})
export class CityService {

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
   * Permite realizar la eliminacion de un municipio
   *
   * @param cityId Identificador del municipio
   *
   * @return Un `Observable` con la respuesta de la operacion
   */
  public deleteCity(cityId: number): Observable<any> {
    return this.httpClient.delete(this.URL_API + 'v1/cities/delete/' + cityId);
  }

  /**
   * Permite obtener todas los municipios
   *
   * @return Un `Observable` con la respuesta del servidor
   */
  public getAllCities(): Observable<{ data: City[] }> {
    return this.httpClient.get<{ data: City[] }>(`${this.URL_API}v1/cities/`);
  }

  /**
   * Permite realizar el registro/actualizacion de un municipio
   *
   * @param city Informacion del municipio
   *
   * @return Un `Observable` con la respuesta de la operacion
   */
  public saveCity(city: City): Observable<any> {

    // Contiene la informacion para realizar la operacion
    const data = {
      id: city.id,
      name: city.name,
      departmentId: city.department.id
    };

    // Si contiene id es una actualizacion
    if (city.id) {
      return this.httpClient.put(this.URL_API + 'v1/cities/update', data);
    }

    return this.httpClient.post(this.URL_API + 'v1/cities/create', data);
  }
}
