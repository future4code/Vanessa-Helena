/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



/**
console.log("Bem vindo ao jogo de Blackjack!");

let jogadaUsuario;
let jogadaComputador;

if (confirm("Clique ok para jogar ou cancelar para sair")) {
  // Variável jogadorC1 e jogadorC2 significa as cartas do jogador
  // pois cada jogador tem direito a duas cartas

  // E a variável computadorC1 e ComputadorC2 significa as cartas do computador

  let jogadorC1 = comprarCarta();
  let jogadorC2 = comprarCarta();
  let computadorC1 = comprarCarta();
  let computadorC2 = comprarCarta();

  // Adicionado valores dentro da minha lista vazia nesse caso as cartas do jogador e do computador

  let cartasJogador = [];
  cartasJogador.push(jogadorC1.valor, jogadorC2.valor);

  let cartasComputador = [];
  cartasComputador.push(computadorC1.valor, computadorC2.valor);

  if (jogadorC1 === "A") {
    jogadorC1 = comprarCarta();
  } else if (jogadorC2 === "A") {
    jogadorC2 = comprarCarta();
  } else if (computadorC1 === "A") {
    computadorC1 = comprarCarta();
  } else if (computadorC2 === "A") {
    computadorC2 = comprarCarta();
  }

  if (
    confirm(
      "Suas cartas são: " +
        "" +
        jogadorC1.texto +
        jogadorC2.texto +
        "A carta revelada do computador é:" +
        computadorC1.texto +
        "\n" +
        "Deseja comprar mais uma carta?"
    )
  ) 
  

  if (
     confirm(
  
   jogadorC3 = comprarCarta() // Esse será o terceiro ponto quando ele escolher uma nova rodada

   pontuacao = jogadorC1.valor + jogadorC2.valor + jogadorC3
   
   console.log(pontuacao)
  )
  )
     
     
   //jogadorC1 = 0;
  //while (jogadorC1 <= 21) {
  //  jogadorC1++;
  //}
  
 
} else {
  console.log("O jogo acabou!");
}
/** */