## Exercício 1 

a) Ela devolve o resultado da query e outras informações, mostra exatamente o que o banco MySQL devolveu. 

b) const getActorByName = async (name: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM Actor WHERE name = '${name}'
   `)
 
    return result[0][0]
 }

 
 c) 