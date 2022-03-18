class computadora{
    static contadorCoputadoras = 0;
    constructor(nombre, monitor,raton, teclado){
        this._idComputadora = ++computadora.contadorCoputadoras;
        this._nombre=nombre;
        this._monitor=monitor;
        this._raton=raton;
        this._teclado= teclado;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    toString(){
        return `Computadora: ${this._idComputadora}: ${this._nombre} \n  ${this._monitor} \n ${this._raton}\n ${this._teclado}]`;
    }
}