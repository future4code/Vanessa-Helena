import { CharacterInput } from "../src/entities/character";
import { performAttackInversionD } from "./exercicio3.test";

test("Test with two characters with valid values", () => {
    
    const validatorMock = jest.fn(() => {
        return true; 
    })

    const attacker: CharacterInput = {
        name: "Chun-Li",
        life: 1500,
        defense: 200,
        strength: 600
    }

    const defender: CharacterInput = {
        name: "Cammy",
        life: 1500,
        defense: 400,
        strength: 800,
      };
  
      performAttackInversionD(attacker, defender, validatorMock as any);
  
      expect(defender.life).toEqual(1300);
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(2);
      expect(validatorMock).toHaveReturnedTimes(2);
    });

    test("Should return invalid character error", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
          return false;
        });
    
        const attacker: CharacterInput = {
          name: "Scorpion",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: CharacterInput = {
          name: "Kitana",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        try {
            performAttackInversionD(attacker, defender, validatorMock as any);
        } catch (err) {
          expect(err.message).toBe("Invalid character");
          expect(validatorMock).toHaveBeenCalled();
          expect(validatorMock).toHaveBeenCalledTimes(1);
          expect(validatorMock).toHaveReturnedTimes(1);
        }
      });