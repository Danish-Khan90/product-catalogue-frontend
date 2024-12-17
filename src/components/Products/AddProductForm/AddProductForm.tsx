"use client";

import { useState } from "react";
import styles from "./AddProductForm.module.css";
import sharedStyles from "../../../styles/shared.module.css";
import { Product } from "@/types/Product";
import FormField from "@/components/common/FormFields/FormFields";

interface AddProductFormProps {
  onSubmit: (product: Product) => void;
  onClose: () => void;
}

const AddProductForm = ({ onSubmit, onClose }: AddProductFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      image: formData.image,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={sharedStyles.form}
      aria-labelledby="modal-title" // Reference the modal header's id
    >
      {/* Name and Price in one row */}
      <div className={styles.row}>
        <FormField
          label="Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          required
          isAutofocus={true}
        />

        <FormField
          label="Price"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter product price"
          type="number"
          step="0.01"
          min="0.01"
          required
        />
      </div>

      {/* Description */}
      <FormField
        label="Description"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter product description"
        type="textarea"
      />

      {/* Image URL */}
      <FormField
        label="Image URL"
        id="image"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Enter image URL"
        type="url"
      />

      {/* Buttons */}
      <div className={styles.buttons}>
        <button
          type="submit"
          className={`${sharedStyles.button} ${sharedStyles["button--primary"]}`}
          aria-label="Submit new product form"
        >
          Submit
        </button>
        <button
          type="button"
          className={`${sharedStyles.button} ${sharedStyles["button--secondary"]}`}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
