interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function StatusFilter({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-white"
    >
      <option value="">Todos</option>
      <option value="published">Publicado</option>
      <option value="draft">Rascunho</option>
      <option value="archived">Arquivado</option>
    </select>
  );
}