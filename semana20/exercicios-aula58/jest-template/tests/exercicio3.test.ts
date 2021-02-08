import { verifyAge } from "../src"
import { UserTwo } from "../src/entities/userTwo"

describe("", () => {
    test("", () => {
       const user: UserTwo = {
          name: "Vanessa",
          age: 32,
          nacionality: "BRAZILIAN"
       }
 
       const result = verifyAge(user, 32, )
 
       expect(result).toEqual({
         
       })
    })
 
})

