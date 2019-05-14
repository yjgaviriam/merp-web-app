import { Role } from './role';
import { Enterprise } from './enterprise';

export class User {

    id: number;
    email: string;
    enterprise: Enterprise;
    lastName: string;
    name: string;
    role: Role;
    username: string;

    /**
     * Constructor de la clase
     */
    constructor() {
        this.role = new Role();
        this.enterprise = new Enterprise();
    }
}
