interface TitleFieldProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function TitleField({
  value = "",
  onChange,
}: TitleFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="title"
        className="block text-sm font-medium text-zinc-300"
      >
        Título
      </label>

      <input
        id="title"
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder="Digite o título do artigo..."
        className="
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-zinc-950
          px-4
          py-3
          text-lg
          text-white
          outline-none
          transition
          focus:border-cyan-500
          focus:ring-2
          focus:ring-cyan-500/20
        "
      />

      <p className="text-xs text-zinc-500">
        O título será exibido na página do artigo e nos resultados de pesquisa.
      </p>
    </div>
  );
}