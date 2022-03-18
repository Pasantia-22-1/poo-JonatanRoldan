

console.log("funciona");

function Datos(){
    const forma = document.getElementById('forma');
    let tipoRaton = forma['tipoRaton'].value;
    let marcaRaton = forma['marcaRaton'].value;
    let tipoTeclado = forma['tipoTeclado'].value;
    let marcaTeclado = forma['marcaTeclado'].value;
    let tipoPantalla = forma['marcaPantalla'].value;
    let tamanoPantalla = forma['tamanoPantalla'].value;
    let tipoPc = forma['modeloPc'].value;

    let raton1 = new Raton(tipoRaton, marcaRaton);
    let teclado1 = new Teclado(tipoTeclado,marcaTeclado);
    let pantalla1 = new Monitor(tipoPantalla,tamanoPantalla);
    let compu1 = new computadora(tipoPc,pantalla1,teclado1,raton1);

    let orden1 = new Orden();
    orden1.agregarComputadora(compu1);
    let result = orden1.toString();

    console.log(result);
    document.getElementById('resultado').innerHTML = `Result: ${result}`
    
}