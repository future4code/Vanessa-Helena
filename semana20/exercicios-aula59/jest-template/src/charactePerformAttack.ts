import { CharacterInput } from "./entities/character";

export const characterPerformAttack = (
    input: CharacterInput
) => {
    const performAttack = (attacker: CharacterInput, defender: CharacterInput) => {
        if (!validateCharacter(attacker) || !validateCharacter(defender)) {
          throw new Error("Invalid character");
        }
      
        if (attacker.strength > defender.defense) {
          defender.life -= attacker.strength - defender.defense;
        }
      };
}