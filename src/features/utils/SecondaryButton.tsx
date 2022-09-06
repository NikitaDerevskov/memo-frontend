export default function secondaryButton({
  onClick,
  text,
  className,
}: {
  onClick: () => void;
  text: string;
  className?: string;
}) {
  return (
    <button
      className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
