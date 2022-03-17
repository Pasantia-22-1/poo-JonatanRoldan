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
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton= ++Raton.contadorRatones
    }
    get idRaton(){
        return this._idRaton
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}
class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado= ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}
class Monitor{
    static contadorMonitores = 0;
    constructor (marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamano: ${this._tamano}]`;
    }
}
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

let raton1 = new Raton ('wireless','genius');
let raton2 = new Raton ('Bluetooth','dell');
console.log(raton1.toString());
console.log(raton2.toString());

let teclado1 = new Teclado ('Bluetooth','dell');
let teclado2 = new Teclado ('wireless','dell');
console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1 = new Monitor ('AOC','24');
let monitor2 = new Monitor ('DELL','19');
console.log(monitor1.toString());
console.log(monitor2.toString());

let computadora1 = new computadora ('all one',monitor1,raton1,teclado1);
let computadora2 = new computadora ('pc', monitor2,raton2, teclado2);
console.log(computadora1.toString());
console.log(computadora2.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
console.log(orden1.toString());