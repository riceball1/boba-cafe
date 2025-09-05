"use client";

import Link from "next/link";
import formatPrice from "../utils/formatPrice";

export default function Cart() {
  // Mock cart data - in a real app this would come from state/context
  const cartItems = [
    { id: 1, name: 'Jasmine Tea', price: 550, quantity: 2, description: 'Sweet floral drink' },
    { id: 2, name: 'Oolong Tea', price: 650, quantity: 1, description: 'Black rich drink' }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const updateQuantity = (id: number, newQuantity: number) => {
    // In a real app, this would update the cart state
    console.log(`Update item ${id} to quantity ${newQuantity}`);
  };

  const removeItem = (id: number) => {
    // In a real app, this would remove the item from cart
    console.log(`Remove item ${id}`);
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
      </div>

      <main className="relative z-10 min-h-screen px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Your Cart
            </h1>
            <p className="text-lg text-gray-600">Review your delicious selections</p>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-20 animate-fade-in-up delay-300">
              <div className="w-32 h-32 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-6xl">🛒</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Add some delicious boba drinks to get started!</p>
              <Link 
                href="/products" 
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6 animate-fade-in-up delay-300">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-6">
                      {/* Product Image Placeholder */}
                      <div className="w-24 h-24 bg-gradient-to-r from-orange-200 to-pink-200 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">🧋</span>
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.name}</h3>
                        <p className="text-gray-600 mb-3">{item.description}</p>
                        <p className="text-lg font-bold text-gray-800">{formatPrice(item.price)} each</p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200"
                        >
                          +
                        </button>
                      </div>
                      
                      {/* Item Total */}
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-800">{formatPrice(item.price * item.quantity)}</p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600 text-sm mt-1 transition-colors duration-200"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 sticky top-8 animate-fade-in-up delay-500">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.name} x{item.quantity}</span>
                        <span className="text-gray-800">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal:</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax:</span>
                      <span>{formatPrice(tax)}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-gray-800 border-t border-gray-200 pt-2">
                      <span>Total:</span>
                      <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Link 
                      href="/checkout" 
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl block text-center"
                    >
                      Proceed to Checkout
                    </Link>
                    <Link 
                      href="/products" 
                      className="w-full border-2 border-orange-500 text-orange-500 py-3 rounded-xl text-lg font-semibold hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300 block text-center"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Back to Products */}
          <div className="text-center mt-8 animate-fade-in-up delay-700">
            <Link 
              href="/products" 
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}