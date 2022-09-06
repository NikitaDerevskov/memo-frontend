export function PrimaryButton({
  text,
  onClick,
  className,
  type,
}: {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
