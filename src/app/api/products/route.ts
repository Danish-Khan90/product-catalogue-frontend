import { NextRequest, NextResponse } from "next/server";

const SPRING_BOOT_URL = "http://localhost:8080/products";

export async function GET() {
  try {
    const response = await fetch(SPRING_BOOT_URL);
    const products = await response.json();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const newProduct = await req.json();
    const response = await fetch(SPRING_BOOT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    const result = await response.json();
    return NextResponse.json({ message: "Product added successfully", result });
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { message: "Failed to add product" },
      { status: 500 }
    );
  }
}
