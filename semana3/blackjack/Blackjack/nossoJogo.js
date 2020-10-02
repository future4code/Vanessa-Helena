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

console.log("Bem vindo ao jogo de Blackjack!");

let jogadaUsuario;
let jogadaComputador;

if (confirm("Clique ok para jogar ou cancelar para sair"))
 {
  let jogadorC1 = comprarCarta();
  let jogadorC2 = comprarCarta();
  let computadorC1 = comprarCarta();
  let computadorC2 = comprarCarta();

  jogadaUsuario = jogadorC1.valor + jogadorC2.valor;
  jogadaComputador = computadorC1.valor + computadorC2.valor;

  console.log(
    `Usuário - Cartas: ${jogadorC1.texto} ${jogadorC2.texto} Pontuação: ${jogadaUsuario}`
  );
  console.log(
    `Computador - Cartas: ${computadorC1.texto} ${computadorC2.texto} Pontuação: ${jogadaComputador}`
  );

  if (jogadaUsuario > jogadaComputador) {
    console.log("Usuário ganhou.");
  } else if (jogadaUsuario < jogadaComputador) {
    console.log("Usuário perdeu.");
  } else {
    console.log("Empatou.");
  }
} 

else {
  console.log("O jogo acabou!");

}