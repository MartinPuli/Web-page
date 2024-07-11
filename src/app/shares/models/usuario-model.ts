export interface User {
    id: number
    name: string;
    email: string;
    cuit: string;
    phone: string;
    img: string;
    tipo: 'vendedor' | 'proveedor';
    additionalData: {
        username: string;
        password: string;
        address: string;
        recoveryEmail: string;
    };
    security: {
        twoStepVerification: boolean;
        trustedUsers: boolean;
    }
}