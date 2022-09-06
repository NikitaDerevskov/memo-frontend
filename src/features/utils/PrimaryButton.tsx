export function PrimaryButton({
  text,
  onClick,
  className,
  type,
  disabled,
}: {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      className={
        !disabled
          ? `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`
          : "bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
      }
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
