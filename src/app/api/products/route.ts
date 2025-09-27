import { NextResponse } from "next/server";
import { products } from "@/app/mock-backend/product-data";

export async function GET() {
    return NextResponse.json({ products }, { status: 200 });
}