function Carro() {
    let velocidade = 0;
  
    function acelerar() {
      if (velocidade < 60) {
        velocidade += 10;
        console.log(`Acelerando: ${velocidade} km/h`);
      } else {
        console.log('O carro já está na velocidade máxima de 60 km/h.');
      }
    }
  
    function frear() {
      if (velocidade > 0) {
        velocidade -= 10;
        console.log(`Freando: ${velocidade} km/h`);
      } else {
        console.log('O carro já está parado.');
      }
    }
  
    return {
      acelerar,
      frear
    };
  }
  
  const meuCarro = Carro();
  
  console.log(' Iniciando o carro...');
  meuCarro.acelerar();
  meuCarro.acelerar();
  meuCarro.acelerar();
  meuCarro.acelerar();
  meuCarro.acelerar();
  meuCarro.acelerar();
  meuCarro.acelerar(); // velocidade máxima
  
  console.log('\n Freando o carro...');
  meuCarro.frear();
  meuCarro.frear();
  meuCarro.frear();
  meuCarro.frear();
  meuCarro.frear();
  meuCarro.frear();
  meuCarro.frear(); // carro parado
  