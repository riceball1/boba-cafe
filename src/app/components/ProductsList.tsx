import { Product } from "@/app/mock-backend/product-data"

export default function ProductsList({ products }: { products: Product[] }) {
    return (
        <div>
            {products.map((product) => (
                <h2 key={product.id}>{product.name}</h2>
            ))}
        </div>
    )
}