import ImagePlaceholder from "../../../ui/ImagePlaceholder";

const reviews = [
  {
    score: "98",
    title: "NVIDIA RTX 6090",
    category: "Hardware",
  },
  {
    score: "96",
    title: "iPhone 18 Pro Max",
    category: "Smartphone",
  },
  {
    score: "95",
    title: "MacBook Pro M6",
    category: "Notebook",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-375 px-8">

        <div className="mb-14">

          <span className="text-blue-500 font-bold uppercase tracking-[4px]">
            Reviews
          </span>

          <h2 className="mt-3 text-5xl font-black text-white">
            Análises completas
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {reviews.map((review) => (

            <article
              key={review.title}
              className="overflow-hidden rounded-4xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-blue-600"
            >

              <ImagePlaceholder height="h-72" />

              <div className="p-8">

                <span className="text-sm font-bold uppercase text-blue-500">
                  {review.category}
                </span>

                <h3 className="mt-4 text-3xl font-black text-white">
                  {review.title}
                </h3>

                <div className="mt-8 flex items-center justify-between">

                  <div>

                    <p className="text-sm text-zinc-500">
                      Nota TechZeon
                    </p>

                    <h4 className="text-6xl font-black text-green-400">
                      {review.score}
                    </h4>

                  </div>

                  <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition">
                    Ler review
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}