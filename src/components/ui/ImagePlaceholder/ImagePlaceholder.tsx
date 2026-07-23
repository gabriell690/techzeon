interface Props {
  height?: string;
}

export default function ImagePlaceholder({
  height = "h-[420px]",
}: Props) {
  return (
    <div
      className={`
        ${height}
        w-full
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-linear-to-br
        from-zinc-900
        via-zinc-800
        to-zinc-900
        flex
        items-center
        justify-center
      `}
    >
      <span className="text-5xl font-black tracking-widest text-zinc-700">
        TECHZEON
      </span>
    </div>
  );
}