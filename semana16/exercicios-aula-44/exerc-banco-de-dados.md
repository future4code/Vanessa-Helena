### Exercício 1 

a) CREATE TABLE - Para criar uma tabela, VARCHAR - Para string de n caracteres ou seja a string não pode passar de 255 caracteres esse é o limite. PRIMARY KEY - Um identificador para a minha tabela ou seja esse id não pode se repetir ele é único. NOT NULL - Um campo que não pode ser vazio é obrigatório colocar um dado. DATE - Quando eu quero que o meu campo seja do tipo data. 


b) Usando o comando SHOW DATABASES - Me mostrou o meu banco de dados dumont_vanessa_sant_helena. E usando o comando SHOW TABLES - Me mostrou a tabela que eu criei com o nome de Actor. 

c) Esse comando DESCRIBE e o nome da minha tabela, me mostrou quais os tipos que eu coloquei ao criar a minha tabela, float, string esse tipo de coisa. Se um campo é vazio ou não.

### Exercício 2 

a) A query é: 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"GLÓRIA PIRES",
1200000,
"1963-08-23",
"FEMALE"
);

b) A query é: 
"002",
"FAUSTÃO",
1200000,
"1963-08-23",
"MALE" Erro código 1062 Não pode ter chaves duplicadas ou seja, não pode ter dois id iguais. 

c) Erro código 1136 Coluna não corresponde, Eu passei id, nome, salário, data de nascimento e gênero, mas na hora de inserir só tinha id, name, salary. 

A query para resolver o problema é: 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"FERNANDA MONTENEGRO",
300000,
"1929-10-19",
"FEMALE" 
);

d) Erro código 1364 Não existe o campo name não foi passado isso na hora de inserir esse dando na tabela. 

A query para resolver o problema é:

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"ANTÔNIO FAGUNDES"
400000,
"1949-04-18",
"male" 
);

e) Faltou colocar aspas na data estava sem
para resolver o problema foi preciso só colocar a data com a sintaxe correta. 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"JULIANA PAES",
719333.33,
"1979-03-26",
"female" 
);

f) Já foram criados com a correção das querys.

### Exercício 3

a) Mostrou a Gloria Pires, Fernanda Montenegro e a Juliana Paes SELECT * from Actor WHERE gender ="female";

b) SELECT salary from Actor WHERE name="Tony Ramos"; Não retornou informação alguma, pois esse nome não existe na minha tabela. 

c) SELECT * FROM Actor WHERE gender="invalid"; Não me trouxe nada também, pois também não existe uma pessoa com o gender "invalid".

d) Mostrou a Fernanda Montenegro e o Antônio Fagundes, a query é: 
SELECT id, name,salary  from Actor WHERE salary < 500000;

e) Erro: nome desconhecido, foi criado a tabela com name e não nome. 
Para corrigir a query é: 
SELECT id, name from Actor WHERE id = "002"; que retornou Glória Pires. 

### Exercício 4 

a) SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000 Essa query significa Seleciona pra mim da tabela Actor onde nome começa com a letra A ou com a Letra J e o salário seja maior que 300000.

b) SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000; Trouxe Gloria Pires e Juliana Paes.

c) SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%"; Trouxe Gloria Pires, Fernanda Montenegro e Antônio Fagundes. 

d) SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000; Mostrou Antônio Fagundes e Juliana Paes. 

  ### Exercício 5 

  a) A query: 
  CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
   sinopse TEXT  NOT NULL
);

CREATE TABLE Para criar a tabela tem um id que identifica essa tabela como única nome do tipo VARCHAR COM LIMITE DE 255 CARACTERES E UM tipo TEXT significa se eu colocar um nome começando com a primeira letra maiúscula e for buscar por um nome todo em minusculo mesmo assim eu terei uma resposta porque TEXT é case-insensitive, em uma busca ele se torna melhor que o VARCHAR. 











