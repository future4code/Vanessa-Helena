import { verifyAge } from "../src"
import { Casino, LOCATION, NACIONALITY, ClientUser } from "../src/entities/clientUser"

describe("Which people in a queue can enter a casino", () => {
    test("Users must be identified by name, nationality (AMERICAN or BRAZILIAN) and age", () => {
       
        test("Checking nationality and age", () => {
        const user: ClientUser = {
          name: "Vanessa",
          age: 32,
          nacionality: NACIONALITY.BRAZILIAN,
       }
       const casino: Casino = {
        name: "Clube dos cinco",
        location: LOCATION.BRAZIL,
      };
       const result = verifyAge(casino, [user])
 
       expect(result.brazilians.allowed).toEqual(["Vanessa"]);
      });
         
       })

       test("Checking age, ", () => {
        const user: ClientUser = {
          name: "Letícia",
          age: 15,
          nacionality: NACIONALITY.BRAZILIAN,
       }
       const casino: Casino = {
        name: "Jornada nas estrelas",
        location: LOCATION.BRAZIL,
      };
       const result = verifyAge(casino, [user])
 
       expect(result.brazilians.unallowed).toEqual("Letícia")
      });
         
       })

