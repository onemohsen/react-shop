export default function Tag({ title = "", className = "bg-red-500" }) {
  return <span className={`text-white p-1 rounded ${className}`}>{title}</span>;
}
