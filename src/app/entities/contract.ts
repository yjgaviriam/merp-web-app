import { Enterprise } from './enterprise';

export class Contract {

    /**
     * Identificador del circuito
     */
    public id: number;

    /**
     * Codigo del circuito
     */
    public code: string;

    /**
     * Fecha
     */
    public date: string;

    /**
     * Empresa relacionada
     */
    public enterprise: Enterprise;

    /**
     * Constructor de la clase
     */
    constructor() {
        this.enterprise = new Enterprise();
    }
}
