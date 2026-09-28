import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { CatalogPage } from "../components/catalog";
import { FILTER_GROUPS, SORT_OPTIONS, getProducts } from "../lib/products";

export const dynamic = "force-dynamic";

function buildSchema(products) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Appscrip",
        url: "https://appscrip.example",
        email: "customercare@appscrip.com",
        sameAs: [
          "https://www.instagram.com/",
          "https://www.linkedin.com/"
        ]
      },
      {
        "@type": "CollectionPage",
        name: "Discover Our Products",
        description:
          "Server-rendered product listing page with filtering, sorting, and responsive layouts.",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: products.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `https://appscrip.example/products/${product.slug}`,
            item: {
              "@type": "Product",
              name: product.title,
              image: `https://appscrip.example${product.image}`,
              description: product.summary,
              category: product.segment[0],
              brand: {
                "@type": "Brand",
                name: "Appscrip"
              }
            }
          }))
        }
      }
    ]
  };
}

export default async function HomePage() {
  const products = await getProducts();
  const schema = buildSchema(products);
  const totalInventory = products.reduce(
    (runningTotal, product) => runningTotal + product.inventoryCount,
    0
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main>
        <CatalogPage
          filterGroups={FILTER_GROUPS}
          products={products}
          sortOptions={SORT_OPTIONS}
          totalInventory={totalInventory}
        />
      </main>
      <Footer />
    </>
  );
}
