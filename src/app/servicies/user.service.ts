import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entities/user';

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

  /**
   * Permite realizar la eliminacion de un usuario
   *
   * @param userId Identificador del usuario
   *
   * @return Un `Observable` con la respuesta de la operacion
   */
  public deleteUser(userId: number): Observable<any> {
    return this.httpClient.delete(this.URL_API + 'v1/users/delete/' + userId);
  }

  /**
   * Permite obtener todos los usuarios
   *
   * @return Un `Observable` con la respuesta del servidor
   */
  public getAllUsers(): Observable<{ data: User[] }> {
    return this.httpClient.get<{ data: User[] }>(this.URL_API + 'v1/users/');
  }

  public getStatusLogged(): User {
    return JSON.parse(localStorage.getItem('__USER__'));
  }

  public getToken(): string {
    return JSON.parse(localStorage.getItem('__TOKEN__'));
  }

  public login(username: string, password: string) {
    const httpParams = new FormData();
    httpParams.append('username', username);
    httpParams.append('password', password);

    return this.httpClient.post(this.URL_API + 'v1/login', httpParams);
  }

  public removeStatusLogged(): void {
    localStorage.removeItem('__USER__');
    localStorage.removeItem('__TOKEN__');
  }

  /**
   * Permite realizar el registro/actualizacion de un usuario
   *
   * @param user Informacion del usuario
   * @param password Clave para el usuario cuando se realiza un registro
   *
   * @return Un `Observable` con la respuesta de la operacion
   */
  public saveUser(user: User, password: string): Observable<any> {

    // Contiene la informacion para realizar la operacion
    const data = {
      email: user.email,
      enterpriseId: user.enterprise.id,
      id: user.id,
      lastName: user.lastName,
      name: user.name,
      password,
      roleId: user.role.id,
      username: user.username
    };

    // Si contiene id es una actualizacion
    if (user.id) {
      return this.httpClient.put(this.URL_API + 'v1/users/update', data);
    }

    return this.httpClient.post(this.URL_API + 'v1/users/create', data);
  }

  public setStatusLogged(user: User, token: string): void {
    localStorage.setItem('__USER__', JSON.stringify(user));
    localStorage.setItem('__TOKEN__', JSON.stringify(token));
  }
}
