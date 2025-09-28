"use client";

import Link from "next/link";
import formatPrice from "../utils/formatPrice";
import { useEffect, useState } from "react";
import { Product } from "../mock-backend/product-data";

export default function Products() {

  const [products, setProducts] = useState<Product[] | null>(null)


    useEffect(() => {
      const fetchProducts = async () => {
        // fetch products
        const urlPath = `/api/products`
        const res = await fetch(urlPath);
        const data = await res.json();

        setProducts(data.products)
      }

      fetchProducts()
    }, [])



  const addToCart = (productId: number) => {
    // In a real app, this would add the product to cart state
    console.log(`Add product ${productId} to cart`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-200 to-orange-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200 to-amber-200 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Floating boba bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-amber-300 rounded-full opacity-60 animate-bounce delay-300"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-orange-300 rounded-full opacity-60 animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-pink-300 rounded-full opacity-60 animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-bounce delay-500"></div>
        <div className="absolute top-60 left-1/3 w-3 h-3 bg-orange-400 rounded-full opacity-60 animate-bounce delay-1200"></div>
        <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-pink-400 rounded-full opacity-60 animate-bounce delay-200"></div>
      </div>

      <main className="relative z-10 min-h-screen px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Our Menu
            </h1>
            <p className="text-lg text-gray-600">Discover our delicious boba tea collection</p>
          </div>

          {/* Products Grid */}
            {!products && <h1 className="text-black">Loading products...</h1>}

            {products && (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
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
              ))}
            </div>)}

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up delay-1000">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Can&apos;t decide?</h2>
              <p className="text-gray-600 mb-6">Try our signature blend or ask our friendly staff for recommendations!</p>
              <Link 
                href="/cart" 
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}