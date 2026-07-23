export default function NewsletterCard() {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

      <h3 className="text-lg font-bold">
        Newsletter
      </h3>

      <p className="mt-3 text-sm text-zinc-500">
        Receba novos artigos por e-mail.
      </p>

      <input
        type="email"
        placeholder="Seu e-mail"
        className="mt-5 w-full rounded-xl border border-zinc-300 bg-transparent px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-zinc-700"
      />

      <button
        className="mt-4 w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600"
      >
        Inscrever-se
      </button>

    </div>
  );
}