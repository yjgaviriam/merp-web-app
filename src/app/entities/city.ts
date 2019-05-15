import { Department } from './department';

export class City {

    /**
     * Identificador de la ciudad
     */
    public id: number;

    /**
     * Nombre de la ciudad
     */
    public name: string;

    /**
     * Departamento al cual pertenece el municipio
     */
    public department: Department;

    /**
     * Constrcutor de la clase
     */
    constructor() {
        this.department = new Department();
    }
}
