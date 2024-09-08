function area(primeiroCateto){
    return function (segundoCateto){
        return primeiroCateto*segundoCateto/2;
};
 };

//primeiro cateto
 const doisCatetos = area (7);
//segundo cateto
 const areaTotal = doisCatetos (3)

console.log (`consumo foi:  ${areaTotal}`);


   