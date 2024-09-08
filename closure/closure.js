const jogo = (function () {
    let placar = 0;
    function exibirPlacar (pontuacao) {
        placar += pontuacao
    }
    return{
        golaco(){
            exibirPlacar(1);
        },
        carrinho(){
            exibirPlacar (-1);
        },
        exibirPlacar(){
            console.log (placar)
        }
    }
})()

jogo.exibirPlacar()
jogo.golaco()
jogo.golaco()
jogo.exibirPlacar()