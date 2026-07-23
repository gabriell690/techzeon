import type { DataTableColumn } from "./types";

interface Props<T> {
  columns: DataTableColumn<T>[];
  data: T[];
}

export default function DataTableBody<T>({
  columns,
  data,
}: Props<T>) {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr
          key={index}
          className="border-b border-zinc-800 transition hover:bg-zinc-800/40"
        >
          {columns.map((column) => (
            <td
              key={String(column.key)}
              className="px-6 py-4 text-sm text-zinc-200"
            >
              {column.render
                ? column.render(row)
                : String(
                    row[column.key as keyof T] ?? "-"
                  )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}