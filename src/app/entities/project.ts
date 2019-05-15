import { Circuit } from './circuit';
import { City } from './city';
import { TypeNetwork } from './type-network';
import { TypeTown } from './type-town';

/**
 * Modelo representativo de un proyecto
 *
 * @author Jhonier Gaviria M. - May. 14-2019
 * @version 1.0.0
 */
export class Project {

    /**
     * Identificador del proyecto
     */
    id: number;

    /**
     * Direccion donde se ubica el proyecto
     */
    address: string;

    /**
     * Tipo de circuito del proyecto
     */
    circuit: Circuit;

    /**
     * Municipio donde esta el proyecto
     */
    city: City;

    /**
     * Codigo del proyecto
     */
    code: string;

    /**
     * Nivel de tension
     */
    electricalVoltageLevel: number;

    /**
     * Imagen del proyecto
     */
    image: string;

    /**
     * Estado del proyecto
     */
    status: number;

    /**
     * Tipo de red del proyecto
     */
    typeNetwork: TypeNetwork;

    /**
     * Tipo de localidad donde se encuentra el proyecto
     */
    typeTown: TypeTown;

    /**
     * Contructor de la clase
     */
    constructor() {
        this.circuit = new Circuit();
        this.city = new City();
        this.typeNetwork = new TypeNetwork();
        this.typeTown = new TypeTown();
    }
}
