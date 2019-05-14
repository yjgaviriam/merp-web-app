import { Substation } from './substation';

export class Circuit {

    /**
     * Identificador de la subestacion
     */
    public id: number;

    /**
     * Codigo de la subestacion
     */
    public code: string;

    /**
     * Nombre de la subestacion
     */
    public name: string;

    /**
     * Subestacion relacionada
     */
    public substation: Substation;

    /**
     * Constructor de la clase
     */
    constructor() {
        this.substation = new Substation();
    }
}
