export function PrimaryButton({ text, onClick, className }: { text: string, onClick: () => void, className?: string }) {
  return (
    <button onClick={onClick} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}>{text}</button>);
}
