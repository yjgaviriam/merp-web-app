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
   * Permite obtener todas los usuarios
   *
   * @return Un `Observable` con la respuesta del servidor
   */
  public getAllUsers(): Observable<{ data: any[] }> {
    return this.httpClient.get<{ data: any[] }>(this.URL_API + 'v1/users/');
  }

  public getStatusLogged(): string {
    return JSON.parse(localStorage.getItem('userLogged'));
  }

  public login(username: string, password: string) {
    const httpParams = new FormData();
    httpParams.append('username', username);
    httpParams.append('password', password);

    return this.httpClient.post(this.URL_API + 'v1/login', httpParams);
  }

  public registerUser(user: User): Observable<any> {
    const httpParams = new FormData();
    httpParams.append('email', user.email);
    httpParams.append('lastName', user.lastName);
    httpParams.append('name', user.name);
    httpParams.append('nickname', user.nickname);
    httpParams.append('roleId', String(user.role.id));
    httpParams.append('enterpriseId', String(user.enterprise.id));

    return this.httpClient.post(this.URL_API + 'v1/users/create', httpParams);
  }

  public removeStatusLogged(): void {
    localStorage.removeItem('userLogged');
  }

  public setStatusLogged(username: string, token: string, fullName: string): void {
    localStorage.setItem('userLogged', JSON.stringify({ username, token, fullName }));
  }
}
