import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                    Boba Cafe
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link href="/products" className="text-gray-700 hover:text-orange-500 transition-colors">Products</Link>
                    </li>
                    <li>
                        <Link href="/cart" className="text-gray-700 hover:text-orange-500 transition-colors">Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}