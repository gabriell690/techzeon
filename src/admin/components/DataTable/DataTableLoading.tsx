interface Props {
  columns: number;
}

export default function DataTableLoading({
  columns,
}: Props) {
  return (
    <tbody>
      <tr>
        <td
          colSpan={columns}
          className="px-6 py-12 text-center text-zinc-500"
        >
          Carregando...
        </td>
      </tr>
    </tbody>
  );
}