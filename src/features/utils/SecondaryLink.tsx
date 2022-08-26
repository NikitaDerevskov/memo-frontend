import { Link } from "react-router-dom";

export function SecondaryLink({ text, to }: { text: string; to: string }) {
  return (
    <Link
      to={to}
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded"
    >
      {text}
    </Link>
  );
}
