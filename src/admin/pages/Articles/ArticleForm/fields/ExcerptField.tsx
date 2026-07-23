interface ExcerptFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ExcerptField({
  value,
  onChange,
}: ExcerptFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="excerpt"
        className="block text-sm font-medium text-zinc-300"
      >
        Resumo
      </label>

      <textarea
        id="excerpt"
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escreva um pequeno resumo..."
        className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
      />

      <div className="flex justify-between text-xs text-zinc-500">
        <span>Recomendado para SEO</span>
        <span>{value.length}/160</span>
      </div>
    </div>
  );
}