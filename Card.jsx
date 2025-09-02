export function Card({ className = "", children }) {
  return <div className={`rounded-2xl border border-black/10 bg-white shadow-soft ${className}`}>{children}</div>;
}
export function CardContent({ className = "", children }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}