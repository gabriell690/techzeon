import type { DataTableColumn } from "./types";

interface Props<T> {
  columns: DataTableColumn<T>[];
}

export default function DataTableHeader<T>({
  columns,
}: Props<T>) {
  return (
    <thead className="bg-zinc-950">
      <tr>
        {columns.map((column) => (
          <th
            key={String(column.key)}
            style={{ width: column.width }}
            className="border-b border-zinc-800 px-6 py-4 text-left text-sm font-semibold text-zinc-300"
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
}