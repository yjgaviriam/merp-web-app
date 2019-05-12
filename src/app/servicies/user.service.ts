import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { HttpClient } from '@angular/common/http';

/**
 * Servicio para trabajar con los usuarios
 *
 * @author Jhonier Gaviria M. - May. 12-2019
 * @version 1.0.0
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  public login(username: string, password: string) {
    const httpParams = new FormData();
    httpParams.append('username', username);
    httpParams.append('password', password);

    return this.httpClient.post(this.URL_API + 'v1/login', httpParams);
  }

  public setStatusLogged(username: string, password: string) {
    localStorage.setItem('userLogged', JSON.stringify({ username, password }));
  }

  public getStatusLogged(): void {
    return JSON.parse(localStorage.getItem('userLogged')) !== null ? JSON.parse(localStorage.getItem('userLogged')).username : null;
  }

  public deleteStatusLogged(): void {
    localStorage.removeItem('userLogged');
  }
}
