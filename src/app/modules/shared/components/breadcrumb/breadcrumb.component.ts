import { Component, Input } from '@angular/core';

/**
 * Componente que representa el breadcurumb de la aplicacion
 *
 * @author Jhonier Gaviria M. - May. 09-2019
 * @version 1.0.0
 */
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

  /**
   * Nombre de la pagina
   */
  @Input()
  public title: string;

  /**
   * Indica si esta en una sub-pagina del home
   */
  @Input()
  public isChild: boolean;

  /**
   * Constructor de la clase
   */
  constructor() { }
}
