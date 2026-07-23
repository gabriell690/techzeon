interface SEOCardProps {
  titleLength?: number;
  descriptionLength?: number;
}

export default function SEOCard({
  titleLength = 0,
  descriptionLength = 0,
}: SEOCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

      <h3 className="text-sm font-semibold text-white">
        SEO
      </h3>

      <p className="mt-1 text-xs text-zinc-500">
        Indicadores para mecanismos de busca.
      </p>

      <div className="mt-5 space-y-4">

        <div>
          <div className="mb-1 flex justify-between text-xs">
            <span className="text-zinc-400">Título</span>
            <span className="text-zinc-500">
              {titleLength}/60
            </span>
          </div>

          <div className="h-2 rounded-full bg-zinc-800">
            <div
              className="h-2 rounded-full bg-cyan-500"
              style={{
                width: `${Math.min((titleLength / 60) * 100, 100)}%`,
              }}
            />
          </div>
        </div>

        <div>
          <div className="mb-1 flex justify-between text-xs">
            <span className="text-zinc-400">
              Meta descrição
            </span>

            <span className="text-zinc-500">
              {descriptionLength}/160
            </span>
          </div>

          <div className="h-2 rounded-full bg-zinc-800">
            <div
              className="h-2 rounded-full bg-emerald-500"
              style={{
                width: `${Math.min((descriptionLength / 160) * 100, 100)}%`,
              }}
            />
          </div>
        </div>

      </div>

    </div>
  );
}