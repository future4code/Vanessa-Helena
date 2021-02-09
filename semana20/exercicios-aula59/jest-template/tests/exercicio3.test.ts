import { validateCharacter } from "../src";
import { CharacterInput } from "../src/entities/character";

export const performAttack = (
    attacker: CharacterInput,
    defender: CharacterInput
) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.strength > defender.defense) {
        defender.life = defender.life - (attacker.strength - defender.defense)
    }
}

export const performAttackInversionD = (
    attacker: CharacterInput,
    defender: CharacterInput,
    validator: (input: CharacterInput) => boolean
) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.strength > defender.defense) {
        defender.life = defender.life - (attacker.strength - defender.defense)
    }
} 