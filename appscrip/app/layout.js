import "./globals.css";

export const metadata = {
  title: "Appscrip | Discover Our Products",
  description:
    "Responsive server-rendered product listing experience built in Next.js for the Appscrip front-end task.",
  keywords: [
    "Next.js",
    "SSR",
    "product listing page",
    "responsive storefront",
    "Appscrip task",
    "Appscrip"
  ],
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
