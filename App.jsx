import { useState } from "react";
import ProductCard from "./components/ProductCard.jsx";

const PRODUCTS = [
  {
    id: 1,
    title: "Noise-Cancelling Headphones",
    subtitle: "40h battery • BT 5.3 • Fast charge",
    price: 4999,
    rating: 4.5,
    tags: ["Bestseller"],
    image: "https://images.unsplash.com/photo-1518445074450-2b7d8b5f5f74?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    subtitle: "Hot-swappable • RGB • 75%",
    price: 3499,
    rating: 4.2,
    tags: ["Hot"],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "4K USB-C Monitor",
    subtitle: "27” IPS • 99% sRGB • 60W PD",
    price: 21999,
    rating: 4.7,
    tags: ["New"],
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Portable SSD 1TB",
    subtitle: "USB 3.2 Gen 2 • 1,050MB/s",
    price: 6999,
    rating: 4.4,
    tags: ["Deal"],
    image: "https://images.unsplash.com/photo-1587825140400-5f0ae1f7f4fd?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (p) => setCart((c) => [...c, p]);

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Product Gallery</h1>
          <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm">
            Cart: <span className="font-semibold">{cart.length}</span>
          </div>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </section>
      </div>
    </main>
  );
}