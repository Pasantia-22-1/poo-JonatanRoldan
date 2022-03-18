
class DispositivoEntrada{
    constructor(tipoentrada, marca){
        this._tipoEntrada = tipoentrada
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada=tipoEntrada
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca=marca
    }
}