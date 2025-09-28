import Link from "next/link"
import formatPrice from "../utils/formatPrice"
import { Product } from "../mock-backend/product-data"


type ProductItemCardProps = {
    product: Product
    index: number
    addToCart: (productId: number) => void
}

export default function ProductItemCard({ product, index, addToCart }: ProductItemCardProps) {
    return (
        <div
            key={product.id}
            className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
        >
            {/* Product Image Placeholder */}
            <div className="w-full h-48 bg-gradient-to-r from-orange-200 to-pink-200 rounded-xl flex items-center justify-center mb-6">
                <span className="text-6xl">🧋</span>
            </div>

            {/* Product Info */}
            <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Price */}
                <div className="mb-6">
                    <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                        {formatPrice(product.price)}
                    </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <button
                        onClick={() => addToCart(product.id)}
                        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Add to Cart
                    </button>
                    <Link
                        href={`/product_detail?id=${product.id}`}
                        className="w-full border-2 border-orange-500 text-orange-500 py-3 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300 block text-center"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}