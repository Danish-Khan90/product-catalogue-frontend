import { NextRequest, NextResponse } from "next/server";

const SPRING_BOOT_URL = "http://localhost:8080";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const response = await fetch(`${SPRING_BOOT_URL}/products/${id}`, {
      method: "DELETE",
    });

    return NextResponse.json({
      message: "Product deleted successfully",
      response,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { message: "Failed to delete product" },
      { status: 500 }
    );
  }
}
