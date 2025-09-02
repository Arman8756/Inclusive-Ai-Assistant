export default function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border border-black/10 bg-black/5 px-2 py-0.5 text-[11px] font-medium tracking-wide ${className}`}>
      {children}
    </span>
  );
}