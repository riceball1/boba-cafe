import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading with animation */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-up">
            Boba Cafe
          </h1>
          
          {/* Subtitle with staggered animation */}
          <p className="text-xl md:text-2xl text-gray-700 mb-4 animate-fade-in-up delay-300">
            Authentic Taiwanese Bubble Tea
          </p>
          <p className="text-lg text-gray-600 mb-12 animate-fade-in-up delay-500">
            Fresh ingredients, handcrafted with love
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-700">
            <Link 
              href="/products" 
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Menu
            </Link>
            <Link 
              href="/cart" 
              className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Order Now
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-1000">
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl"></span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">Premium tea leaves and fresh milk</p>
          </div>
          
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Service</h3>
            <p className="text-gray-600">Fast and friendly service</p>
          </div>
          
          <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">❤️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Made with Love</h3>
            <p className="text-gray-600">Every cup crafted with care</p>
          </div>
        </div>
      </main>
    </div>
  );
}
