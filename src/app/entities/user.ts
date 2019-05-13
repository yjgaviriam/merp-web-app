export class User {
    id: number;
    email: string;
    lastName: string;
    name: string;
    nickname: string;
    role: {
        id: number;
        name: string;
    };
    enterprise: {
        id: number;
        name: string;
        nit: string;
    };
}
