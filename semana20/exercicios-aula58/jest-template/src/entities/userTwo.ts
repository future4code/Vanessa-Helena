// Exercício 3 -----------------------------------------------

export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}

export interface UserTwo {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}

export interface UserTwoUnallowed {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}


export interface Casino {
    name: string;
    location: LOCATION;
}

export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}

export interface ResultItem {
    allowed: string[];
    unallowed: string[];
}

// -----------------------------------------------------------