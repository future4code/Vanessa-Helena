// ----------------- Exercícios de interpretação de código ---------

// EXERCÍCIO 1

// a. Será impresso o resultado da variável 2 * 5 que dá 10
// e da variável 10 * 5 que da 50.

// b. Não mostraria nada, pois o console.log ele serve pra mostrar
//para mim que estou desenvolvendo algo que o meu código está fazendo.
// nesse exemplo a saída é o resultado e se eu não ponho o consolo.log eu
//não teria como ver isso.

// EXERCÍCIO 2

// a. Ele vai printar o nome Darvas e o nome Caio, porque foi criado uma função
// que pergunta se meu i < 2 então ele vai printar o nome da posição 0 e 1 pois o 2 é
//igual a dois e não menor.

// b. Será impresso Amanda e Caio. pois a lógica toda já está feita só mudou os elementos do array
//eu poderia acrescentar mais coisas nele se eu quisesse também mas como tá pedindo de i < 2 ele vai
//mostrar só os primeiros elementos que são 0 e 1 e nesse caso Amanda e Caio.

//EXERCÍCIO 3

// Ele verifica se o x terminar em 0 ele é par e depois multiplica o x por ele mesmo.

// ------------------Exercício de escrita de código-----------------

// EXERCÍCIO 4

// a.

//function sobreMim() {

//console.log ("Eu sou Vanessa, tenho 31 anos, moro no Rio Grande do Sul e sou estudante.")
//}

//sobreMim()

// ----------------------------------------------------------------------------------------------------

// b.

/*function sobreUsuario(nome, idade, cidade, simNao) {
   
    if (simNao === 0) {
        simNao = "sim"
    
}
    else (simNao = "nao") 
        


return console.log ("Eu sou" , nome,  "tenho" ,  idade , "anos", "moro em" , cidade , "e sou estudante: " , simNao)

 }


let nome = prompt("Digite seu nome: ")
let idade = Number (prompt("Digite sua idade: "))
let cidade = prompt("Digite sua cidade aqui: ")
let simNao = Boolean (prompt("Você é estudante? digite sim ou não"))

sobreUsuario(nome, idade, cidade, simNao)
*/

// -------------------------------------------------------------------------------------------------

// EXERCÍCIO 5

// a.

/*function soma(a,b) {

// Aqui dentro que vai toda a minha lógica 

    resultado = numero1 + numero2
    console.log(resultado)

}

let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite um segundo número"))

soma(numero1,numero2)
*/

// ---------------------------------------------------------------------------------------------------

// b.

/*
function doisNumeros(numero1, numero2) {
  let boleano;

  if (numero1 >= numero2) {
    boleano = true;
  } else {
    boleano = false;
  }

  console.log(boleano);
}

doisNumeros(15, 5);
*/

// ----------------------------------------------------------------------------------------------------

// c.

//function mensagem(palavra) {
//for (let i = 0; i < 10; i++) console.log(palavra);
//}
//mensagem("olá");

//----------------------------------------------------------------------------------------------------

// EXERCÍCIO 6

//const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

// a.

//const arrayNumeros = (array) => {
//console.log(array.length);
//};
//arrayNumeros(array);

//---------------------------------------------------------------------------------------------------

// b.

/*
let numeroPar = (numero) => {
  if (numero % 2 === 0) {
    console.log("Esse número é par", numero);
  } else {
    console.log("É ímpar", numero);
  }
};
numeroPar(2);
*/

//----------------------------------------------------------------------------------------------------

// c.

/*  // NÃO CONSEGUI FAZER
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

let quantPares = (array) => {
  for (let i = 0; i < array; i++);
  {
    if (array % 2 === 0) {
      console.log("É par", array[i]);
    }
  }
};
quantPares(array);
*/

//--------------------------------------------------------------------------------------------------- 

// d. Esse dependia do outro então não consegui fazer também.