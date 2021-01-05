// a

/*let minhaString: string = "Oieeeeeeeeeee" 
minhaString = 70 Dá um erro porque o tipo dessa váriável é string 
então ela só aceita string
-------------------------------------------------------------------------------------------------------*/

// b Dessa forma usando | que significa union type então essa mesma variável recebe uma string ou um número.

/*let meuNumero: number | string = 85;
console.log(meuNumero)

meuNumero = "Olá"
console.log(meuNumero)
-------------------------------------------------------------------------------------------------------*/

// c

/*const person: { name: string, age: number, favouriteColour: string} = {
    name: "Vanessa",
    age: 32,
    favouriteColour: "Pink"
}
-------------------------------------------------------------------------------------------------------*/

// d

/*type person = { name: string, age: number, favouriteColour: string}

const henrique: person = {
    name: "henrique",
    age: 50,
    favouriteColour: "Black"
}

const maria: person = {
    name: "maria",
    age: 70,
    favouriteColour: "Blue"
}

const dolores: person = {
    name: "dolores",
    age: 40,
    favouriteColour: "Yellow"
}

-------------------------------------------------------------------------------------------------------*/

// e

/*type person = { name: string, age: number, favouriteColour: RainbowColor}

enum RainbowColor {
    RED = "Red",
    ORANGE = "Orange",
    YELLOW = "Yellow",
    GREEN = "Green",
    BLUE = "Blue",
    INDIGO = "Indigo",
    VIOLET = "Violet"
}

const henrique: person = {
    name: "henrique",
    age: 50,
    favouriteColour: RainbowColor.YELLOW 
}

const maria: person = {
    name: "maria",
    age: 70,
    favouriteColour: RainbowColor.ORANGE
}

const dolores: person = {
    name: "dolores",
    age: 40,
    favouriteColour: RainbowColor.VIOLET 
}

// PAREI POR AQUI PORQUE FALTOU ENERGIA, GASTEI TODAS ELAS TENTANDO ENTENDER COMO RODAVA OS ARQUIVOS E MONTANDO TODO O AMBIENTE.

-------------------------------------------------------------------------------------------------------*/