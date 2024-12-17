import { Product } from "@/types/Product";

const API_URL = "/api/products";

export const getAllProducts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addProduct = async (product: Product) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const deleteProduct = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return response.json();
};
