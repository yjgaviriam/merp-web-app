import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';
import { Project } from '../entities/project';

/**
 * Servicio para trabajar con los proyectos
 *
 * @author Jhonier Gaviria M. - May. 14-2019
 * @version 1.0.0
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

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
   * Permite realizar la eliminacion de un proyecto
   *
   * @param projectId Identificador del proyecto
   *
   * @return Un `Observable` con la respuesta de la operacion
   */
  public deleteProject(projectId: number): Observable<any> {
    return this.httpClient.delete(this.URL_API + 'v1/projects/delete/' + projectId);
  }

  /**
   * Permite obtener todas los proyectos
   *
   * @return Un `Observable` con la respuesta del servidor
   */
  public getAllProjects(): Observable<{ data: Project[] }> {
    return this.httpClient.get<{ data: Project[] }>(`${this.URL_API}v1/projects/`);
  }

  /**
   * Permite realizar el registro/actualizacion de un proyecto
   *
   * @param project Informacion del proyecto
   *
   * @return Un `Observable` con la respuesta de la operacion
   */
  public saveProject(project: Project): Observable<any> {

    // Contiene la informacion para realizar la operacion
    const data = {
      address: project.address,
      cityId: project.city.id,
      circuitId: project.circuit.id,
      code: project.code,
      id: project.id,
      electricalVoltageLevel: project.electricalVoltageLevel,
      typeNetworkId: project.typeNetwork.id,
      typeTownId: project.typeTown.id
    };

    // Si contiene id es una actualizacion
    if (project.id) {
      return this.httpClient.put(this.URL_API + 'v1/projects/update', data);
    }

    return this.httpClient.post(this.URL_API + 'v1/projects/create', data);
  }
}
