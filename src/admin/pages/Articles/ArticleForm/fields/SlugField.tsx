interface SlugFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SlugField({
  value,
  onChange,
}: SlugFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="slug"
        className="block text-sm font-medium text-zinc-300"
      >
        Slug
      </label>

      <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-950 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/20">
        <span className="border-r border-zinc-800 px-4 py-3 text-sm text-zinc-500">
          /blog/
        </span>

        <input
          id="slug"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="meu-artigo"
          className="w-full bg-transparent px-4 py-3 text-white outline-none"
        />
      </div>

      <p className="text-xs text-zinc-500">
        URL amigável utilizada pelo artigo.
      </p>
    </div>
  );
}