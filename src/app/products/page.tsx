"use client";

import { useEffect, useState } from "react";
import Modal from "../../components/common/Modal/Modal";
import AddProductForm from "../../components/Products/AddProductForm/AddProductForm";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import { Product } from "../../types/Product";
import sharedStyles from "../../styles/shared.module.css";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
} from "@/utils/api_utils/products";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fetchProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const handleAddProduct = async (newProduct: Product) => {
    const data = await addProduct(newProduct);
    newProduct.id = data?.result?.id;
    setProducts((prev) => [...prev, newProduct]);
    setIsModalOpen(false);
  };

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className={sharedStyles.container}>
      <header className={sharedStyles.header}>
        <h1>Product List</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className={`${sharedStyles.button} ${sharedStyles["button--primary"]}`}
          aria-label="Open Add Product Modal"
        >
          Add Product
        </button>
      </header>
      <section
        aria-labelledby="product-list"
        className={sharedStyles.grid}
        role="list"
      >
        {products.length ? (
          products.map((product) => (
            <ProductCard
              key={product?.id}
              product={product}
              onDelete={handleDeleteProduct}
            />
          ))
        ) : (
          <></>
        )}
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        header={"Add Product"}
      >
        <AddProductForm
          onSubmit={handleAddProduct}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </main>
  );
};

export default ProductsPage;
