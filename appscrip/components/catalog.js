"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "./product-card";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  CloseIcon
} from "./icons";
import styles from "./catalog.module.css";

function formatCount(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function getSelectedLabel(selectedValues) {
  if (!selectedValues.length) {
    return "All";
  }

  if (selectedValues.length === 1) {
    return selectedValues[0];
  }

  return `${selectedValues.length} selected`;
}

function sortProducts(products, sortKey) {
  const sorted = [...products];

  switch (sortKey) {
    case "newest":
      return sorted.sort(
        (left, right) => new Date(right.dateAdded) - new Date(left.dateAdded)
      );
    case "popular":
      return sorted.sort((left, right) => right.popularity - left.popularity);
    case "priceHigh":
      return sorted.sort((left, right) => right.sortPrice - left.sortPrice);
    case "priceLow":
      return sorted.sort((left, right) => left.sortPrice - right.sortPrice);
    default:
      return sorted.sort((left, right) => left.recommendedRank - right.recommendedRank);
  }
}

function FilterGroup({
  group,
  isOpen,
  onClear,
  onToggleOpen,
  onToggleOption,
  selectedValues
}) {
  return (
    <details
      className={styles.filterGroup}
      onToggle={(event) => onToggleOpen(group.key, event.currentTarget.open)}
      open={isOpen}
    >
      <summary className={styles.filterSummary}>
        <div className={styles.filterSummaryRow}>
          <span className={styles.filterLabel}>{group.label}</span>
          <ChevronDownIcon className={styles.filterChevron} />
        </div>
        <p className={styles.filterValue}>{getSelectedLabel(selectedValues)}</p>
      </summary>

      <div className={styles.filterOptions}>
        <button className={styles.unselectButton} onClick={() => onClear(group.key)} type="button">
          Unselect all
        </button>

        {group.options.map((option) => {
          const inputId = `${group.key}-${option}`;
          const checked = selectedValues.includes(option);

          return (
            <label className={styles.checkboxRow} htmlFor={inputId} key={option}>
              <input
                checked={checked}
                id={inputId}
                onChange={() => onToggleOption(group.key, option)}
                type="checkbox"
              />
              <span>{option}</span>
            </label>
          );
        })}
      </div>
    </details>
  );
}

export function CatalogPage({
  filterGroups,
  products,
  sortOptions,
  totalInventory
}) {
  const [showSidebar, setShowSidebar] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortKey, setSortKey] = useState("recommended");
  const [favorites, setFavorites] = useState(() => new Set(["nomad-luggage-tag"]));
  const [customizableOnly, setCustomizableOnly] = useState(false);
  const [openGroups, setOpenGroups] = useState(() =>
    filterGroups.reduce((state, group) => {
      state[group.key] = Boolean(group.defaultOpen);
      return state;
    }, {})
  );
  const [selectedFilters, setSelectedFilters] = useState(() =>
    filterGroups.reduce((state, group) => {
      state[group.key] = [];
      return state;
    }, {})
  );

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      if (customizableOnly && !product.customizable) {
        return false;
      }

      return filterGroups.every((group) => {
        const selectedValues = selectedFilters[group.key];

        if (!selectedValues.length) {
          return true;
        }

        return selectedValues.some((value) => product[group.key].includes(value));
      });
    });

    return sortProducts(filtered, sortKey);
  }, [customizableOnly, filterGroups, products, selectedFilters, sortKey]);

  const visibleInventory = useMemo(
    () =>
      visibleProducts.reduce(
        (runningTotal, product) => runningTotal + product.inventoryCount,
        0
      ),
    [visibleProducts]
  );

  const hasActiveFilters =
    customizableOnly ||
    Object.values(selectedFilters).some((selectedValues) => selectedValues.length > 0);

  function toggleFavorite(productId) {
    setFavorites((currentFavorites) => {
      const nextFavorites = new Set(currentFavorites);

      if (nextFavorites.has(productId)) {
        nextFavorites.delete(productId);
      } else {
        nextFavorites.add(productId);
      }

      return nextFavorites;
    });
  }

  function toggleFilterValue(groupKey, option) {
    setSelectedFilters((currentFilters) => {
      const groupValues = currentFilters[groupKey];
      const nextValues = groupValues.includes(option)
        ? groupValues.filter((value) => value !== option)
        : [...groupValues, option];

      return {
        ...currentFilters,
        [groupKey]: nextValues
      };
    });
  }

  function clearGroup(groupKey) {
    setSelectedFilters((currentFilters) => ({
      ...currentFilters,
      [groupKey]: []
    }));
  }

  function setGroupOpen(groupKey, isOpen) {
    setOpenGroups((currentOpenGroups) => ({
      ...currentOpenGroups,
      [groupKey]: isOpen
    }));
  }

  function clearAllFilters() {
    setCustomizableOnly(false);
    setSelectedFilters(
      filterGroups.reduce((state, group) => {
        state[group.key] = [];
        return state;
      }, {})
    );
  }

  return (
    <section className={styles.catalogSection}>
      <div className={`page-shell ${styles.heroWrap}`}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <ol className={styles.breadcrumbList}>
            <li>
              <a href="#">Home</a>
            </li>
            <li aria-hidden="true">|</li>
            <li>
              <a aria-current="page" href="#">
                Shop
              </a>
            </li>
          </ol>
        </nav>

        <div className={styles.heroCopy}>
          <h1 className={styles.pageTitle}>Discover Our Products</h1>
          <p className={styles.pageSummary}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </div>

      <div className={`page-shell ${styles.toolbarWrap}`}>
        <div className={styles.toolbarBar}>
          <div className={styles.toolbarLeft}>
            <p className={styles.inventoryCount}>
              <span aria-hidden="true">{formatCount(visibleInventory || totalInventory)}</span>
              <span className="sr-only">{formatCount(visibleInventory || totalInventory)} items</span>
              <span className={styles.inventoryLabel}> Items</span>
            </p>

            <button
              className={styles.sidebarToggle}
              onClick={() => setShowSidebar((value) => !value)}
              type="button"
            >
              <ChevronLeftIcon
                className={`${styles.sidebarToggleIcon} ${showSidebar ? "" : styles.sidebarToggleIconCollapsed}`}
              />
              {showSidebar ? "Hide Filter" : "Show Filter"}
            </button>
          </div>

          <div className={styles.mobileActions}>
            <button
              className={styles.mobileFilterButton}
              onClick={() => setMobileFiltersOpen(true)}
              type="button"
            >
              Filter
            </button>
          </div>

          <label className={styles.sortLabel}>
            <span className="sr-only">Sort products</span>
            <select
              className={styles.sortSelect}
              onChange={(event) => setSortKey(event.target.value)}
              value={sortKey}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className={styles.sortChevron} />
          </label>
        </div>
      </div>

      <div className={`page-shell ${styles.catalogShell}`}>
        {showSidebar ? (
          <aside className={styles.sidebar}>
            <h2 className="sr-only">Filter products</h2>
            <label className={styles.customizableRow}>
              <input
                checked={customizableOnly}
                onChange={() => setCustomizableOnly((value) => !value)}
                type="checkbox"
              />
              <span>Customizable</span>
            </label>

            {filterGroups.map((group) => (
              <FilterGroup
                group={group}
                isOpen={openGroups[group.key]}
                key={group.key}
                onClear={clearGroup}
                onToggleOpen={setGroupOpen}
                onToggleOption={toggleFilterValue}
                selectedValues={selectedFilters[group.key]}
              />
            ))}

            {hasActiveFilters ? (
              <button className={styles.clearAllButton} onClick={clearAllFilters} type="button">
                Clear all filters
              </button>
            ) : null}
          </aside>
        ) : null}

        <div className={styles.gridWrap}>
          <h2 className="sr-only">Shop all products</h2>
          {visibleProducts.length ? (
            <div
              className={`${styles.productGrid} ${showSidebar ? styles.productGridWithSidebar : styles.productGridFull}`}
            >
              {visibleProducts.map((product) => (
                <ProductCard
                  isFavorite={favorites.has(product.id)}
                  key={product.id}
                  onToggleFavorite={toggleFavorite}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h2>No products match these filters</h2>
              <p>Try removing a few selections to see more of the collection.</p>
              <button onClick={clearAllFilters} type="button">
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>

      {mobileFiltersOpen ? (
        <div aria-modal="true" className={styles.mobileDrawer} role="dialog">
          <button
            aria-label="Close filters"
            className={styles.mobileDrawerBackdrop}
            onClick={() => setMobileFiltersOpen(false)}
            type="button"
          />
          <div className={styles.mobileDrawerPanel}>
            <div className={styles.mobileDrawerHeader}>
              <h2>Filter</h2>
              <button
                aria-label="Close filters"
                className={styles.mobileDrawerClose}
                onClick={() => setMobileFiltersOpen(false)}
                type="button"
              >
                <CloseIcon className={styles.mobileDrawerCloseIcon} />
              </button>
            </div>

            <label className={styles.customizableRow}>
              <input
                checked={customizableOnly}
                onChange={() => setCustomizableOnly((value) => !value)}
                type="checkbox"
              />
              <span>Customizable</span>
            </label>

            <div className={styles.mobileFilterStack}>
              {filterGroups.map((group) => (
                <FilterGroup
                  group={group}
                  isOpen={openGroups[group.key]}
                  key={`mobile-${group.key}`}
                  onClear={clearGroup}
                  onToggleOpen={setGroupOpen}
                  onToggleOption={toggleFilterValue}
                  selectedValues={selectedFilters[group.key]}
                />
              ))}
            </div>

            <div className={styles.mobileDrawerFooter}>
              <button
                className={styles.mobileGhostButton}
                onClick={clearAllFilters}
                type="button"
              >
                Reset
              </button>
              <button
                className={styles.mobilePrimaryButton}
                onClick={() => setMobileFiltersOpen(false)}
                type="button"
              >
                See {visibleProducts.length} products
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
