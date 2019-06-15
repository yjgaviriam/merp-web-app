import { Role } from './role';
import { Enterprise } from './enterprise';

/**
 * Representacion de la entidad usuario
 *
 * @author Jhonier Gaviria M. - Jun. 15-2019
 * @version 1.0.0
 */
export class User {

    /**
     * Identificador del usuario
     */
    id: number;

    /**
     * Correo electronico del usuario
     */
    email: string;

    /**
     * Empresa a la que esta asociado el usuario
     */
    enterprise: Enterprise;

    /**
     * Apellido del usuario
     */
    lastName: string;

    /**
     * Nombre del usuario
     */
    name: string;

    /**
     * Rol del usuario
     */
    role: Role;

    /**
     * Nickname del usuario
     */
    username: string;

    /**
     * Constructor de la clase
     */
    constructor() {
        this.role = new Role();
        this.enterprise = new Enterprise();
    }
}
