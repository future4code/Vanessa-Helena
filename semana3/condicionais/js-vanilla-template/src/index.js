// Exercícios de interpretação de código 

// Exercício 1 

/* Resposta 

Ele faz uma pergunta para o usuário informar um número 
esse número sera armazenado em uma variável que nesse caso é o numero
e logo abaixo será feita uma verificação, se o resto da divisão desse número por 2 
for igual a 0 
então no console será printado a seguinte mensagem: "Passou no teste"
Se não ele printa ("Não passou no teste")
Só vai cair na pŕoxima verificação se o resto da divisão for igual a 1 
aí será mostrado ("Não passou no teste").

*/

// Exercício 2

/* Resposta 

a. O programa serve para o usuario escolher uma fruta e mostrar o seu valor
b. Será mostrado o valor da maçã 2.25
c.Ele não mostraria o preço de 5.5 passaria para o default
Isso ocorre porque ele não pararia de rodar.

*/

// Exercício 3

//a. Foi declarada uma variável e está sendo pedido que o usuário 
//digite um número e esse número será guardada nessa variável.
//b. Colocando 10 vai printar ("Esse número passou no teste")
//Não daria mensagem nenhuma por se tratar de um número negativo 
//ele é menor e não maior que 0.

//c. Sim, dará uma mensagem de erro porque a variável mensagem está sendo chamada
//no escopo global e não no escopo em que ela pertence.

// Exercícios de escrita de código 

// Exercício 4 

// 1.

//let idadeUsuario = Number (prompt ("Digite sua idade"))

//f 
   // (idadeUsuario > 18) {
        
      //  console.log("Você pode dirigir");
//}

//else {

   // console.log("Você não pode dirigir");

//}

// EXERCÍCIO 5

//const turno = prompt ("Que turno você estuda? digite M V ou N").toUpperCase()

//if (turno === "M"){
    //console.log("Bom dia")
//}

//else if (turno === "V") {
    //console.log("Boa Tarde")

//}

//else if (turno === "N") {
    //console.log("Boa Noite")
//}

// EXERCÍCIO 6 

//const turno = prompt("Que turno você estuda? digite M V ou N").toUpperCase()

//switch (turno) {
    //case "M":
        //console.log("Bom dia")
        //break;
    //case "V":
        //console.log("Boa Tarde")
        //break;
    //case "N":
        //console.log("Boa Noite")
        //break;
//}

// Exercício 7 

//let generoFilme = prompt("Qual o gênero de filme que vamos assistir? ")

//let precoIngresso = Number (prompt("Digite o preço do ingresso"))

//if (generoFilme === "fantasia" && precoIngresso <= 15) {
    //console.log("Bom filme")
//}

//else (

  //console.log("Escolha outro filme")
//)


// Desafio 1 

//let generoFilme = prompt("Qual o gênero de filme que vamos assistir? ")

//let precoIngresso = Number (prompt("Digite o preço do ingresso"))

//let snack = prompt ("Qual snack você vai querer comprar? pipoca, chocolate ou doce?")

//if (generoFilme === "fantasia" && precoIngresso <= 15) {
    
    //console.log("Bom filme com " + snack)
//}

//else (

  //console.log("Escolha outro filme")
//)

// Desafio 2 


//let NomeUsuario = prompt("Digite seu nome? ")
//let generoFilme = prompt("Indique um tipo de jogo? Digite IN ou DO")