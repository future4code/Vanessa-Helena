// Exercícios de interpretação de código

// 1. Ele tem uma função que tá pedindo para o usuário digitar a cotação do dólar aí o programa vai ler
//esse número e vai multiplicar com 100 para transformar em reais e aí ele faz a chamada da função põe
// o resutado do cálculo em uma variável e no final vai mostrar o resultado no console.

// 2. É um programa que pede um valor para o usuário do quanto ele quer investir e lá tem vários opções de
//investimento daí ele vai pegar o valor do usuário e vai fazer uma multiplicação referente a esse investimento
// e em baixo existem duas variáveis uma que se chama novoMontante e segundoMontante a primeira diz que
// o tipo de investimento é ações e o valor é 150 ou seja já passa um valor pronto e a segunda variável
// corresponde a um tipo de valor que não existe no programa, ou seja se rodar segundo montante vai retornar
// tipo de investimento informado incorreto.

// 3. Nesse exercício ele verifica se um número é par ou ímpar se for par ele coloca no array vazio 1 os
// valores e se for ímpar ele coloca no segundo array e no final ele mostra o tamanho
// do array dos números pares e ímpar e depois separado o tamanho da lista de números pares e o tamanho de
// números ímpar.

// 4. O infinity sempre será o maior número então se colocar o valor 25 no programa ele vai verificar se o
// 25 é menor que o infinity?  é, então ele vai colocar o número 25 e em baixo ele faz outra verificação
// o 25 é maior que zero? é maior então vai mostrar o número 25.

//------------------------------------------------------------------------------------------------------

// Exercícios de lógica de programação

// 1. Através do While, do for e do for of

//let variasCoisas = ["Vanessa", "Carol", 1, 2, 7, 8]

//for(let i = 0 ; i < variasCoisas.length; i++)
//console.log(variasCoisas)

// 2.

// A -> false
// B -> false
// C -> true
// D -> true
// E -> true

// 3.

// Dá forma que ele tá não rodaria pois eu preciso dizer a quantidade que eu quero que o programe rode
//ou seja nesse caso =[5]

//const quantidadeDeNumerosPares=[5]
//let i = 0
//while(i < quantidadeDeNumerosPares) {
//console.log(i*2)
//i++
//}

// 4.

//function trigonometria (a, b, c) {
//if ( a === b && b === c){
//console.log("Triângulo Equilátero");
//}else if(a !== b && b !== c && c !== a){
//console.log("Triângulo Escaleno!");
//}else{
//console.log("Triângulo Isósceles");
//}
//}

//trigonometria(12, 12, 14);

// 5.

/*
function numeros(numero1, numero2) {
  console.log("ENTRADA: ");
  console.log(numero1 + " e " + numero2);
  console.log("SAÍDA:");

  if (numero1 > numero2) {
    console.log("é o maior:", numero1);
  }

  if (numero2 > numero1) {
    console.log("é o maior", numero2);
  }
  let resultado = numero1 / numero2;
  let resultado2 = numero2 / numero1;

  if (resultado % 2 === 0) {
    console.log(numero1 + "é divisível por: " + numero2);
  }
  if (resultado % 2 !== 0) {
    console.log(numero1 + "não é divisível por: " + numero2);
  }
  if (resultado2 % 2 === 0) {
    console.log(numero2 + "é divisível por: " + numero1);
  }
  if (resultado2 % 2 !== 0) {
    console.log(numero2 + "não é divisível por: " + numero1);
  }
  if (numero1 > numero2) {
    console.log("A diferença entre eles é: ", numero1 - numero2);
  }

  if (numero2 > numero1) {
    console.log("A diferença entre eles é: ", numero2 - numero1);
  }
}

numeros(800, 250);
*/

//-------------------------------------------------------------------------------------------------------

// Exercícios de funções

// 1.

/*
function arrayDeNumeros(listaDeNumeros) {
    let maior = 0 
    let segundoMaior = 0
    let listaVazia = []

 
    for (let i = 0; i < listaDeNumeros.length; i++) {
        if (listaDeNumeros[i] > maior ) {
           maior = listaDeNumeros[i];
            listaVazia.push(maior)
        }
     } 
        listaDeNumeros[i]
      


    

 console.log("O primeiro maior número da lista é: " + maior)
 


}
    
      
let listaDeNumeros = [1, 2, 3, 4, 10000, 600, 7, 8, 9, 10];

arrayDeNumeros(listaDeNumeros); 
*/