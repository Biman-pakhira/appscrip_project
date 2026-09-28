import {
  BagIcon,
  ChevronDownIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
  SymbolMark,
  UserIcon
} from "./icons";
import styles from "./header.module.css";

const PROMO_ITEMS = [
  "Free Shipping",
  "New Arrivals",
  "Easy Returns"
];

const NAV_ITEMS = [
  "Home",
  "Shop",
  "New Arrivals",
  "Best Sellers",
  "About",
  "Contact"
];

export function Header() {
  return (
    <header>
      <div className={styles.promoBar}>
        <div className={`page-shell ${styles.promoInner}`}>
          {PROMO_ITEMS.map((item, index) => (
            <p className={styles.promoItem} key={`${item}-${index}`}>
              <span className={styles.promoMark}>
                <SymbolMark className={styles.promoIcon} />
              </span>
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className={styles.headerWrap}>
        <div className={`page-shell ${styles.headerInner}`}>
          <div className={styles.brandCluster}>
            <button
              aria-label="Open navigation menu"
              className={styles.mobileMenuButton}
              type="button"
            >
              <MenuIcon className={styles.toolbarIcon} />
            </button>
          </div>

          <a aria-label="Appscrip home" className={styles.logoLink} href="#">
            <svg
              aria-label="Appscrip brand logo"
              className={styles.logoImage}
              focusable="false"
              role="img"
              viewBox="0 0 1136 938"
              xmlns="http://www.w3.org/2000/svg"
            >
              <image
                height="938"
                href="/appscrip-logo.svg"
                preserveAspectRatio="xMidYMid meet"
                width="1136"
              />
            </svg>
          </a>

          <div className={styles.toolbar}>
            <button aria-label="Search" className={styles.iconButton} type="button">
              <SearchIcon className={styles.toolbarIcon} />
            </button>
            <button
              aria-label="Wishlist"
              className={styles.iconButton}
              type="button"
            >
              <HeartIcon className={styles.toolbarIcon} />
            </button>
            <button aria-label="Shopping bag" className={styles.iconButton} type="button">
              <BagIcon className={styles.toolbarIcon} />
            </button>
            <button
              aria-label="My account"
              className={`${styles.iconButton} ${styles.desktopOnly}`}
              type="button"
            >
              <UserIcon className={styles.toolbarIcon} />
            </button>
            <button
              aria-label="Select language"
              className={`${styles.localeButton} ${styles.desktopOnly}`}
              type="button"
            >
              ENG
              <ChevronDownIcon className={styles.localeIcon} />
            </button>
            <button aria-label="Contact us" className={styles.contactButton} type="button">
              Contact Us
            </button>
          </div>
          <nav aria-label="Primary" className={styles.primaryNav}>
            <div className="page-shell">
              <ul className={styles.navList}>
                {NAV_ITEMS.map((item) => (
                  <li key={item}>
                    <a className={styles.navLink} href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

      </div>
    </header>
  );
}
