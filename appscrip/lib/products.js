const STATIC_PRODUCTS = [
  {
    id: "recycled-backpack",
    slug: "recycled-backpack",
    title: "Recycled backpack",
    summary: "Structured backpack crafted for daily carry.",
    image: "/products/recycled-backpack-front.png",
    imageAlt: "Charcoal recycled backpack standing upright on a white background.",
    badge: "New product",
    stockStatus: null,
    customizable: true,
    idealFor: ["Men", "Women"],
    occasion: ["Everyday"],
    work: ["Office"],
    fabric: ["Cotton"],
    segment: ["Accessories"],
    suitableFor: ["Travel"],
    rawMaterials: ["Recycled Materials"],
    pattern: ["Solid"],
    inventoryCount: 412,
    sortPrice: 180,
    popularity: 93,
    recommendedRank: 1,
    dateAdded: "2026-03-28"
  },
  {
    id: "crochet-dinosaur-soft-toy",
    slug: "crochet-dinosaur-soft-toy",
    title: "Crochet dinosaur soft toy",
    summary: "Handcrafted toy in bright organic yarn.",
    image: "/products/crochet-dinosaur-seated.png",
    imageAlt: "Yellow and turquoise crochet dinosaur soft toy seated on a white background.",
    badge: null,
    stockStatus: "Out of stock",
    customizable: false,
    idealFor: ["Baby & Kids"],
    occasion: ["Gifting"],
    work: ["Creative"],
    fabric: ["Cotton"],
    segment: ["Toys"],
    suitableFor: ["Indoor"],
    rawMaterials: ["Organic"],
    pattern: ["Textured"],
    inventoryCount: 286,
    sortPrice: 95,
    popularity: 88,
    recommendedRank: 2,
    dateAdded: "2026-03-16"
  },
  {
    id: "nomad-luggage-tag",
    slug: "nomad-luggage-tag",
    title: "Nomad luggage tag",
    summary: "Soft leather loop tag for frequent travelers.",
    image: "/products/nomad-luggage-tag.png",
    imageAlt: "Tan leather luggage tag with loop strap on a white background.",
    badge: null,
    stockStatus: null,
    customizable: true,
    idealFor: ["Men", "Women"],
    occasion: ["Travel"],
    work: ["Office"],
    fabric: ["Leather"],
    segment: ["Accessories"],
    suitableFor: ["Travel"],
    rawMaterials: ["Vegan Leather"],
    pattern: ["Solid"],
    inventoryCount: 240,
    sortPrice: 68,
    popularity: 84,
    recommendedRank: 3,
    dateAdded: "2026-03-05"
  },
  {
    id: "sun-embroidered-cap",
    slug: "sun-embroidered-cap",
    title: "Sun embroidered cap",
    summary: "Washed cap finished with tonal floral embroidery.",
    image: "/products/sun-embroidered-cap.png",
    imageAlt: "Light grey cap with pale yellow embroidery on a white background.",
    badge: null,
    stockStatus: null,
    customizable: false,
    idealFor: ["Women"],
    occasion: ["Everyday"],
    work: ["Weekend"],
    fabric: ["Cotton"],
    segment: ["Apparel"],
    suitableFor: ["Outdoor"],
    rawMaterials: ["Organic"],
    pattern: ["Embroidered"],
    inventoryCount: 318,
    sortPrice: 72,
    popularity: 79,
    recommendedRank: 4,
    dateAdded: "2026-02-21"
  },
  {
    id: "recycled-backpack-rear",
    slug: "recycled-backpack-rear",
    title: "Recycled backpack reverse",
    summary: "Alternate view of the structured backpack silhouette.",
    image: "/products/recycled-backpack-rear.png",
    imageAlt: "Rear view of a charcoal backpack with wide straps on a white background.",
    badge: null,
    stockStatus: null,
    customizable: true,
    idealFor: ["Men", "Women"],
    occasion: ["Everyday"],
    work: ["Office"],
    fabric: ["Cotton"],
    segment: ["Accessories"],
    suitableFor: ["Travel"],
    rawMaterials: ["Recycled Materials"],
    pattern: ["Solid"],
    inventoryCount: 396,
    sortPrice: 176,
    popularity: 91,
    recommendedRank: 5,
    dateAdded: "2026-03-18"
  },
  {
    id: "crochet-dinosaur-side",
    slug: "crochet-dinosaur-side",
    title: "Crochet dinosaur side pose",
    summary: "Playful side profile from the knit toy collection.",
    image: "/products/crochet-dinosaur-side.png",
    imageAlt: "Yellow crochet dinosaur viewed from the side on a white background.",
    badge: null,
    stockStatus: null,
    customizable: false,
    idealFor: ["Baby & Kids"],
    occasion: ["Gifting"],
    work: ["Creative"],
    fabric: ["Cotton"],
    segment: ["Toys"],
    suitableFor: ["Indoor"],
    rawMaterials: ["Organic"],
    pattern: ["Textured"],
    inventoryCount: 274,
    sortPrice: 96,
    popularity: 81,
    recommendedRank: 6,
    dateAdded: "2026-02-14"
  },
  {
    id: "woven-crossbody-open",
    slug: "woven-crossbody-open",
    title: "Woven crossbody open",
    summary: "Handwoven crossbody bag shown with folded strap.",
    image: "/products/woven-crossbody-open.png",
    imageAlt: "Woven tan crossbody bag lying open on a white background.",
    badge: null,
    stockStatus: null,
    customizable: true,
    idealFor: ["Women"],
    occasion: ["Travel"],
    work: ["Weekend"],
    fabric: ["Leather"],
    segment: ["Accessories"],
    suitableFor: ["Travel"],
    rawMaterials: ["Handcrafted"],
    pattern: ["Woven"],
    inventoryCount: 268,
    sortPrice: 152,
    popularity: 77,
    recommendedRank: 7,
    dateAdded: "2026-02-08"
  },
  {
    id: "roll-clutch",
    slug: "roll-clutch",
    title: "Roll clutch",
    summary: "Minimal roll-up clutch in textured charcoal weave.",
    image: "/products/roll-clutch.png",
    imageAlt: "Dark grey roll clutch bag on a white background.",
    badge: null,
    stockStatus: null,
    customizable: true,
    idealFor: ["Women"],
    occasion: ["Evening"],
    work: ["Weekend"],
    fabric: ["Cotton"],
    segment: ["Accessories"],
    suitableFor: ["Travel"],
    rawMaterials: ["Recycled Materials"],
    pattern: ["Solid"],
    inventoryCount: 255,
    sortPrice: 118,
    popularity: 69,
    recommendedRank: 8,
    dateAdded: "2026-01-30"
  },
  {
    id: "striped-canvas-pouch",
    slug: "striped-canvas-pouch",
    title: "Striped canvas pouch",
    summary: "Zip pouch with striped artisan weaving.",
    image: "/products/striped-canvas-pouch.png",
    imageAlt: "Black and white striped pouch on a white background.",
    badge: null,
    stockStatus: null,
    customizable: false,
    idealFor: ["Men", "Women"],
    occasion: ["Everyday"],
    work: ["Office"],
    fabric: ["Canvas"],
    segment: ["Accessories"],
    suitableFor: ["Indoor"],
    rawMaterials: ["Handcrafted"],
    pattern: ["Striped"],
    inventoryCount: 330,
    sortPrice: 52,
    popularity: 74,
    recommendedRank: 9,
    dateAdded: "2026-02-26"
  },
  {
    id: "artisan-market-pouch",
    slug: "artisan-market-pouch",
    title: "Artisan market pouch",
    summary: "Compact pouch in multitone artisan weave.",
    image: "/products/artisan-market-pouch.png",
    imageAlt: "Blue, white, and multicolor woven pouch on a white background.",
    badge: null,
    stockStatus: null,
    customizable: false,
    idealFor: ["Women"],
    occasion: ["Everyday"],
    work: ["Weekend"],
    fabric: ["Canvas"],
    segment: ["Accessories"],
    suitableFor: ["Indoor"],
    rawMaterials: ["Handcrafted"],
    pattern: ["Woven"],
    inventoryCount: 322,
    sortPrice: 58,
    popularity: 71,
    recommendedRank: 10,
    dateAdded: "2026-01-22"
  },
  {
    id: "woven-tan-crossbody",
    slug: "woven-tan-crossbody",
    title: "Woven tan crossbody",
    summary: "Roomy woven bag with soft shoulder strap.",
    image: "/products/woven-tan-crossbody.png",
    imageAlt: "Woven tan crossbody bag standing upright on a white background.",
    badge: null,
    stockStatus: null,
    customizable: true,
    idealFor: ["Women"],
    occasion: ["Travel"],
    work: ["Weekend"],
    fabric: ["Leather"],
    segment: ["Accessories"],
    suitableFor: ["Travel"],
    rawMaterials: ["Handcrafted"],
    pattern: ["Woven"],
    inventoryCount: 324,
    sortPrice: 164,
    popularity: 83,
    recommendedRank: 11,
    dateAdded: "2026-03-01"
  }
];

export const FILTER_GROUPS = [
  {
    key: "idealFor",
    label: "Ideal For",
    options: ["Men", "Women", "Baby & Kids"],
    defaultOpen: true
  },
  {
    key: "occasion",
    label: "Occasion",
    options: ["Everyday", "Travel", "Gifting", "Evening"],
    defaultOpen: false
  },
  {
    key: "work",
    label: "Work",
    options: ["Office", "Creative", "Weekend"],
    defaultOpen: false
  },
  {
    key: "fabric",
    label: "Fabric",
    options: ["Cotton", "Canvas", "Leather"],
    defaultOpen: false
  },
  {
    key: "segment",
    label: "Segment",
    options: ["Accessories", "Toys", "Apparel"],
    defaultOpen: false
  },
  {
    key: "suitableFor",
    label: "Suitable For",
    options: ["Travel", "Indoor", "Outdoor"],
    defaultOpen: false
  },
  {
    key: "rawMaterials",
    label: "Raw Materials",
    options: ["Recycled Materials", "Organic", "Handcrafted", "Vegan Leather"],
    defaultOpen: false
  },
  {
    key: "pattern",
    label: "Pattern",
    options: ["Solid", "Textured", "Woven", "Striped", "Embroidered"],
    defaultOpen: false
  }
];

export const SORT_OPTIONS = [
  { value: "recommended", label: "Recommended" },
  { value: "newest", label: "Newest first" },
  { value: "popular", label: "Popular" },
  { value: "priceHigh", label: "Price : High to Low" },
  { value: "priceLow", label: "Price : Low to High" }
];

function withFallbackSource(products) {
  return products.map((product) => ({
    ...product,
    source: "local"
  }));
}

export async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=11", {
      cache: "no-store",
      signal: AbortSignal.timeout(2500)
    });

    if (!response.ok) {
      throw new Error("Mock API request failed.");
    }

    const remoteProducts = await response.json();

    return STATIC_PRODUCTS.map((product, index) => {
      const remoteProduct = remoteProducts[index];

      if (!remoteProduct) {
        return {
          ...product,
          source: "local"
        };
      }

      return {
        ...product,
        popularity: Math.max(
          product.popularity,
          Math.round(remoteProduct.rating?.count ?? product.popularity)
        ),
        sortPrice: Number(remoteProduct.price ?? product.sortPrice),
        source: "fakestore"
      };
    });
  } catch (error) {
    return withFallbackSource(STATIC_PRODUCTS);
  }
}
