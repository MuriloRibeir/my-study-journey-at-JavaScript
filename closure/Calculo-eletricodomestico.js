function calculoDeConsumo(potenciaEmKwh){
    return function (horasLigado){
return potenciaEmKwh*horasLigado;
};
}

//  potencia
const calculoConsumo = calculoDeConsumo (4.5)
//  horas
const consumoTotal = calculoConsumo (7)

console.log (`consumo foi:  ${consumoTotal}`);
