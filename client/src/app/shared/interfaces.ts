export interface User {
    email: string
    password: string
    returnSecureToken?: boolean
}

export interface dbAuthResponse {
    idToken: string
    expiresIn: string
}