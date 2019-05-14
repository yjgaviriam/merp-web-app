import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';
import { Circuit } from '../entities/circuit';

/**
 * Servicio para trabajar con los circuitos
 *
 * @author Jhonier Gaviria M. - May. 13-2019
 * @version 1.0.0
 */
@Injectable({
  providedIn: 'root'
})
export class CircuitService {

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
   * Permite realizar la eliminacion de un circuito
   *
   * @param circuitId Identificador del circuito
   *
   * @return Un `Observable` con la respuesta de la operacion
   */
  public deleteCircuit(circuitId: number): Observable<any> {
    return this.httpClient.delete(this.URL_API + 'v1/circuits/delete/' + circuitId);
  }

  /**
   * Permite obtener todas los circuitos
   *
   * @return Un `Observable` con la respuesta del servidor
   */
  public getAllCircuits(): Observable<{ data: any[] }> {
    return this.httpClient.get<{ data: any[] }>(`${this.URL_API}v1/circuits/`);
  }

  /**
   * Permite realizar el registro/actualizacion de un circuito
   *
   * @param circuit Informacion del circuito
   *
   * @return Un `Observable` con la respuesta de la operacion
   */
  public saveCircuit(circuit: Circuit): Observable<any> {

    // Contiene la informacion para realizar la operacion
    const data = {
      code: circuit.code,
      id: circuit.id,
      name: circuit.name,
      substationId: circuit.substation.id
    };

    // Si contiene id es una actualizacion
    if (circuit.id) {
      return this.httpClient.put(this.URL_API + 'v1/circuits/update', data);
    }

    return this.httpClient.post(this.URL_API + 'v1/circuits/create', data);
  }
}
