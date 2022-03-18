class Orden{
    static contadorOrdenadores = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenadores;
        this._Computadoras = [];
    }
    get idOrden(){
        return this._idOrden
    }
    agregarComputadora(computadora){
        this._Computadoras.push(computadora);
    }
    mostrarOrden(){

    }
    toString(){
        return `Orden: ${this._idOrden}: ${this._Computadoras}]`;
    }
}