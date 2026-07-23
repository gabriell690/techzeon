interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <span className="text-sm font-bold uppercase tracking-[4px] text-blue-500">
        {badge}
      </span>

      <h2 className="mt-3 text-5xl font-black text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}