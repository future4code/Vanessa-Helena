import { User } from "../src/entities/user"
import { performPurchase } from "../src/index" 

describe("Make a purchase or not", () => {
   test("If the balance is greater than or equal to the purchase price you must return a new user", () => {
      const user: User = {
         name: "Vanessa",
         balance: 300
      }

      const result = performPurchase(user, 100)

      expect(result).toEqual({
         ...user,
         balance: 200
      })
   })

   test("Testing balance equal to value", () => {
      const user: User = {
         name: "Vanessa",
         balance: 300
      }
   
      const result = performPurchase(user, 300)
      
      expect(result).toEqual({
         ...user,
         balance: 0
      })
   })

   test("Testing balance less than value", () => {
      const user: User = {
         name: "Vanessa",
         balance: 10
      }
   
      const result = performPurchase(user, 50)
      
      expect(result).toEqual(undefined)
   })
})