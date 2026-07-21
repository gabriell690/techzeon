export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Pesquisar..."
      className="
        w-64
        rounded-lg
        border
        border-zinc-700
        bg-zinc-900
        px-4
        py-2
        text-sm
        text-white
        placeholder:text-zinc-500
        focus:border-blue-600
        focus:outline-none
      "
    />
  );
}