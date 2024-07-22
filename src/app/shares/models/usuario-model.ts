export type Usuario = Vendedor | Proveedor

interface User {
    id: number
    email: string;
    cuit: string;
    phone: string;
    img: string;
    username: string;
    address: string;
    recoveryEmail: string;
    twoStepVerification: boolean;
    trustedUsers: boolean;
}

export interface Vendedor extends User {
    name: string
}

export interface Proveedor extends User {
    brandName: string
}