import { Substation } from './substation';

export class Circuit {

    /**
     * Identificador del circuito
     */
    public id: number;

    /**
     * Codigo del circuito
     */
    public code: string;

    /**
     * Nombre del circuito
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
