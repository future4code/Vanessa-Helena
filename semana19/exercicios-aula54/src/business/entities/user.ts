export enum USER_ROLES {
    NORMAL = 'NORNAL',
    ADMIN = 'ADMIN'
}

export type authenticationData = {
    id: string,
    role: USER_ROLES
}

export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}