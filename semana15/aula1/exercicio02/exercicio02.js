// Exercício 02

let valor1 = Number(process.argv[2]);
let valor2 = Number(process.argv[3]);
let operacacaoAritmetica = process.argv[4];

if (operacacaoAritmetica === "soma") {
  console.log(valor1 + valor2);
} else if (operacacaoAritmetica === "subtracao") {
  console.log(valor1 - valor2);
} else if (operacacaoAritmetica === "multiplicacao") {
  console.log(valor1 * valor2);
} else if ("divisao") {
  console.log(valor1 / valor2);
}
