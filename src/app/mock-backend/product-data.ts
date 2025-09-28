export type Product = {
    id: number
    imageUrl: string
    price: number
    name: string
    description: string
}

export type CartItem = Product & {
    quantity: number
}

export const products: Product[]  = [
    {
        id: 1,
        imageUrl: '',
        price: 550,
        name: 'Jasmine Tea',
        description: 'Sweet floral drink'
    },
    {
        id: 2,
        imageUrl: '',
        price: 650,
        name: 'Oolong Tea',
        description: 'Black rich drink'
    }
]


