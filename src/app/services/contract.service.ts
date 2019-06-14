import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';
import { Contract } from '../entities/contract';

/**
 * Servicio para trabajar con los contratos
 *
 * @author Jhonier Gaviria M. - May. 15-2019
 * @version 1.0.0
 */
@Injectable({
  providedIn: 'root'
})
export class ContractService {

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
   * Permite realizar la eliminacion de un contrato
   *
   * @param contractId Identificador del contrato
   *
   * @return Un `Observable` con la respuesta de la operacion
   */
  public deleteContract(contractId: number): Observable<any> {
    return this.httpClient.delete(this.URL_API + 'v1/contracts/delete/' + contractId);
  }

  /**
   * Permite obtener todos los contratos
   *
   * @return Un `Observable` con la respuesta del servidor
   */
  public getAllContracts(): Observable<{ data: Contract[] }> {
    return this.httpClient.get<{ data: Contract[] }>(`${this.URL_API}v1/contracts/`);
  }

  /**
   * Permite realizar el registro/actualizacion de un contrato
   *
   * @param contract Informacion del contrato
   *
   * @return Un `Observable` con la respuesta de la operacion
   */
  public saveContract(contract: Contract): Observable<any> {

    // Contiene la informacion para realizar la operacion
    const data = {
      code: contract.code,
      id: contract.id,
      date: contract.date,
      enterpriseId: contract.enterprise.id
    };

    // Si contiene id es una actualizacion
    if (contract.id) {
      return this.httpClient.put(this.URL_API + 'v1/contracts/update', data);
    }

    return this.httpClient.post(this.URL_API + 'v1/contracts/create', data);
  }
}
