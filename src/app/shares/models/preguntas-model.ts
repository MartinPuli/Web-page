export interface pregunta{
    idPregunta: number;
    idProducto: number;
    idConsultador: number
    pregunta: string;
}

export interface respuesta{
    idRespuesta: number;
    idPregunta: number;
    respuesta: string;
}