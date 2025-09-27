import { NextResponse } from "next/server";


  // Mock cart data - in a real app this would come from state/context
  const cartItems = [
    { id: 1, name: 'Jasmine Tea', price: 550, quantity: 2, description: 'Sweet floral drink' },
    { id: 2, name: 'Oolong Tea', price: 650, quantity: 1, description: 'Black rich drink' }
  ];




export async function GET() {
    return NextResponse.json({ cartItems }, { status: 200 });
}