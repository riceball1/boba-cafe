"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products } from '@/app/mock-backend/product-data';
import formatPrice from "../utils/formatPrice";

export default function ProductDetail() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  
  // Find the product by ID
  const product = products.find(p => p.id === parseInt(productId || '0'));
  
  const addToCart = (productId: number) => {
    // In a real app, this would add the product to cart state
    console.log(`Add product ${productId} to cart`);
  };

  // If product not found, show error state
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-200 to-orange-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>

        <main className="relative z-10 min-h-screen flex items-center justify-center px-8">
          <div className="text-center animate-fade-in-up">
            <div className="w-32 h-32 bg-gradient-to-r from-red-200 to-pink-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-6xl">❌</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link 
              href="/products" 
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Back to Products
            </Link>
          </div>
        </main>
      </div>
    );
  }

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
      </div>

      <main className="relative z-10 min-h-screen px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="mb-8 animate-fade-in-up">
            <Link 
              href="/products" 
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
            >
              ← Back to Products
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="animate-fade-in-up delay-300">
              <div className="w-full h-96 bg-gradient-to-r from-orange-200 to-pink-200 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-8xl">🧋</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-fade-in-up delay-500">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{product.name}</h1>
                <p className="text-xl text-gray-600 mb-6">{product.description}</p>
                
                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    {formatPrice(product.price)}
                  </span>
                </div>

                {/* Product Features */}
                <div className="mb-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Made with premium tea leaves</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Fresh ingredients daily</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full flex items-center justify-center">
                      <span className="text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Customizable sweetness level</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <button 
                    onClick={() => addToCart(product.id)}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-xl text-xl font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Add to Cart
                  </button>
                  <Link 
                    href="/cart" 
                    className="w-full border-2 border-orange-500 text-orange-500 py-4 rounded-xl text-xl font-semibold hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300 block text-center"
                  >
                    View Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 animate-fade-in-up delay-700">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">About This Drink</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
                  <p className="text-gray-600">Sourced from the finest tea gardens</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Fresh Daily</h3>
                  <p className="text-gray-600">Prepared fresh every morning</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Made with Love</h3>
                  <p className="text-gray-600">Crafted by our passionate team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}