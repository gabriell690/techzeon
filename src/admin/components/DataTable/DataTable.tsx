import type { DataTableProps } from "./types";

import DataTableHeader from "./DataTableHeader";
import DataTableBody from "./DataTableBody";
import DataTableEmpty from "./DataTableEmpty";
import DataTableLoading from "./DataTableLoading";

export default function DataTable<T>({
  columns,
  data,
  loading,
  emptyMessage = "Nenhum registro encontrado.",
}: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
      <table className="w-full border-collapse">
        <DataTableHeader columns={columns} />

        {loading ? (
          <DataTableLoading columns={columns.length} />
        ) : data.length === 0 ? (
          <DataTableEmpty
            columns={columns.length}
            message={emptyMessage}
          />
        ) : (
          <DataTableBody
            columns={columns}
            data={data}
          />
        )}
      </table>
    </div>
  );
}