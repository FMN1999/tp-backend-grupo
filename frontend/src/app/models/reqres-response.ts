export interface ReqResResponse {
    _id:        ID;
    marca:      string;
    categoria:  string;
    talle:      string;
    detalle:    string;
    __v:        number;
    tipoRopa:   ID;
    precioRopa: ID;
    temporada:  ID;
}

interface ID {
    $oid: string;
}