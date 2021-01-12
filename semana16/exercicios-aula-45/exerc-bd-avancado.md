### Exercício 1 

A- ALTER TABLE Actor DROP COLUMN salary; Vai alterar a tabela Actor apagando a coluna salary. 

B- ALTER TABLE Actor CHANGE gender sex VARCHAR(6); Vai alterar a tabela Actor fazendo a mudança de genero para sex e VARCHAR com o limite de 6 caracteres. 

C- ALTER TABLE Actor CHANGE gender gender VARCHAR(255); Vai alterar a tabela Actor fazendo a mudança de gender para gender e VARCHAR com o limite de 255 caracteres. 

D- ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

## Exercicio 02
A- UPDATE Actor
SET name = "Amanda Caetano",
birth_date="2021-01-12"
WHERE id = "003"

B- 
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE id = "005";
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";

C-UPDATE Actor
SET name = "Mariana Ximenes",
salary = 500000,
birth_date= "1981-04-26",
gender= "female"
WHERE id = "005";

D- Ele não da erro e não executa o comando pois o ID não existe.

## Exercicio 03
A- DELETE FROM Actor WHERE id  = "004";

B-DELETE FROM Actor WHERE gender = "male" AND salary >=1000000

## Exercicio 04
A-SELECT MAX(salary) FROM Actor;

B-SELECT MIN(salary) FROM Actor WHERE gender = "female";

C-SELECT COUNT(*) FROM Actor WHERE gender = "female";

D- SELECT SUM (salary)FROM Actor;

## Exercicio 05
A- Ele retorna a quantidade dos gêneros agrupados. Qantidade de male e female.

B-SELECT ID,NAME FROM Actor
ORDER BY name DESC ;

C-SELECT * FROM Actor
ORDER BY salary ;

D-SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

E-SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

## Exercicio 06

A- ALTER TABLE Movie ADD playing_limit_date DATE;

B- ALTER TABLE Movie CHANGE rating rating FLOAT;

C- UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001;"

D- DELETE FROM Movie WHERE id = "001";

## Exercício 07

A- SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

B- SELECT AVG(avaliacao) FROM Movie;

C- SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

D- SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();

E- SELECT MAX(avaliacao) FROM Movie;

F- SELECT MIN(avaliacao) FROM Movie;

## Exercício 8 

A- SELECT * FROM Movie
ORDER BY nome ASC; 

B- SELECT * FROM Movie
ORDER BY nome DESC
LIMIT 5;

C- SELECT * FROM Movie
WHERE data_lancamento < CURDATE()
ORDER BY data_lancamento DESC
LIMIT 3;

D- SELECT * FROM Movie 
ORDER BY avaliacao DESC 
LIMIT 3;
