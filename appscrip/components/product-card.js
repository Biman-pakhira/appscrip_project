import { HeartIcon } from "./icons";
import styles from "./catalog.module.css";

export function ProductCard({ isFavorite, onToggleFavorite, product }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardImageWrap}>
        {product.badge ? <span className={styles.badge}>{product.badge}</span> : null}
        {product.stockStatus ? (
          <span className={styles.stockBadge}>{product.stockStatus}</span>
        ) : null}
        <img
          alt={product.imageAlt}
          className={styles.cardImage}
          height="399"
          loading="lazy"
          src={product.image}
          width="300"
        />
      </div>
      <div className={styles.cardMeta}>
        <div className={styles.cardHeadingRow}>
          <h3 className={styles.cardTitle}>{product.title}</h3>
          <button
            aria-label={
              isFavorite ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`
            }
            aria-pressed={isFavorite}
            className={`${styles.favoriteButton} ${isFavorite ? styles.favoriteActive : ""}`}
            onClick={() => onToggleFavorite(product.id)}
            type="button"
          >
            <HeartIcon filled={isFavorite} />
          </button>
        </div>
        <p className={styles.cardCaption}>
          <a href="#">Sign in</a> or Create an account to see pricing
        </p>
      </div>
    </article>
  );
}
