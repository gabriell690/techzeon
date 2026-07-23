export default function HeroSkeleton() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 lg:grid-cols-[2fr_420px]">

        <div className="h-155 animate-pulse rounded-3xl bg-zinc-900" />

        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="h-28 animate-pulse rounded-2xl bg-zinc-900"
            />
          ))}
        </div>

      </div>
    </section>
  );
}