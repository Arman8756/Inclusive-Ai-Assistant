import Button from "./ui/Button.jsx";
import { Card, CardContent } from "./ui/Card.jsx";
import Badge from "./ui/Badge.jsx";

function Stars({ value = 0, outOf = 5 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${value} out of ${outOf}`}>
      {Array.from({ length: outOf }).map((_, i) => {
        const isFull = i < full;
        const isHalf = !isFull && half && i === full;
        return (
          <svg key={i} viewBox="0 0 24 24" className="h-4 w-4"
               fill={isFull ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
            {isHalf ? (
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"
                    fill="currentColor" />
            ) : (
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
            )}
          </svg>
        );
      })}
    </div>
  );
}

export default function ProductCard({ product, onAdd }) {
  return (
    <Card className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {product.tags?.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
      <CardContent className="space-y-3">
        <h3 className="line-clamp-1 text-base font-semibold">{product.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">₹{product.price.toLocaleString()}</span>
          <Stars value={product.rating} />
        </div>
        <p className="line-clamp-2 text-sm text-black/70">{product.subtitle}</p>
        <Button className="w-full" onClick={() => onAdd?.(product)}>Add to cart</Button>
      </CardContent>
    </Card>
  );
}