import { Atributo } from "./atributo-model";

export interface IProduct {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string;
    rating:      Rating;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating {
    rate:  number;
    count: number;
}

export interface productoCompleto{
    IProduct: IProduct
    info: informacion
}

export interface informacion {
    idUsuario:  number;
    stock: number;
    agregados: number
}

export interface producto{
    id:          number;
    nombre:       string;
    stock:       number;
    precio: number;
    descripcion:    string;
    image:       string;
    idProveedor: number;
    idCategoria: number;
}