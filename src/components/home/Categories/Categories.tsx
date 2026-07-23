/* eslint-disable @typescript-eslint/no-explicit-any */
interface CategoriesProps {
  categories: any[];
}

export default function Categories({
  categories,
}: CategoriesProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold">
        Categorias
      </h2>

      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-full border px-5 py-3"
          >
            {category.name}
          </div>
        ))}
      </div>
    </section>
  );
}