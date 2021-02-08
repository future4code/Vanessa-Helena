import { User } from "./entities/user";
import {
  UserTwo,
  Casino,
  LOCATION,
  Result,
  UserTwoUnallowed,
  NACIONALITY,
} from "./entities/userTwo";

export function performPurchase(user: User, value: number): User | undefined {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value,
    };
  }
  return undefined;
}

export function verifyAge(casino: Casino, users: UserTwo[]): Result {
  const allowed: UserTwo[] = [];
  const unallowed: UserTwoUnallowed[] = [];

  for (const UserTwo of users) {
    if (casino.location === LOCATION.EUA) {
      if (UserTwo.age >= 21) {
        allowed.push(UserTwo);
      } else {
        unallowed.push(UserTwo);
      }
    } else if (casino.location === LOCATION.BRAZIL) {
      if (UserTwo.age >= 18) {
        allowed.push(UserTwo);
      } else {
        unallowed.push(UserTwo);
      }
      break;
    }
  }

  return {
    brazilians: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
    },
    americans: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
    },
  };
}