export interface Admin {
    email: string
    password: string
    returnSecureToken?: boolean
}

export interface dbAuthResponse {
    token: string
    expiresIn: string
}

export interface Order {
    id?: number,
    name: string,
    phone: number,
    created_date: Date,
    delivery_address: string,
    total_price: number,
    comment?: string,
    product_amount: number,
    paid: boolean,
    product_id: number,
}

export interface DbCreateResponse {
    name: string,
}

export interface Product {
    id: number,
    provider: string,
    name: string,
    avaliable: boolean,
    price: number,
    details: string
}