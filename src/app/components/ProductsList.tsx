import { Product } from "@/app/mock-backend/product-data"
import formatPrice from "../utils/formatPrice"

export default function ProductsList({ products }: { products: Product[] }) {
    return (
        <div>
            {products.map((product) => (
                <li key={product.id} className="text-lg text-bold">{product.name} | price: {formatPrice(product.price)}</li>
            ))}
        </div>
    )
}