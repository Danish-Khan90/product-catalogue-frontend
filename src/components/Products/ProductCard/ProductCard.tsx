import { Product } from "../../../types/Product";
import styles from "./ProductCard.module.css";
import sharedStyles from "../../../styles/shared.module.css";

interface ProductCardProps {
  product: Product;
  onDelete: (id: string) => void;
}

const ProductCard = ({ product, onDelete }: ProductCardProps) => {
  return (
    <article
      className={sharedStyles.card}
      aria-labelledby={`product-${product.id}`}
      role="listitem"
    >
      <img
        src={
          product.image ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
        }
        alt={product.image ? product.name : "Placeholder image for product"}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 id={`product-${product.id}`} className={styles.name}>
          {product.name}
        </h3>
        <p className={styles.description}>{product.description}</p>
        <footer className={styles.footer}>
          <p className={styles.price}>€{product.price.toFixed(2)}</p>
          <button
            className={styles.deleteButton}
            onClick={() => onDelete(product.id!)}
            aria-label={`Delete ${product.name}`}
          >
            Delete
          </button>
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
