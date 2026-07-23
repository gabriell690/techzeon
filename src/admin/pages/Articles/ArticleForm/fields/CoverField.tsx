import { ImagePlus } from "lucide-react";

interface CoverFieldProps {
  value: File | null;
  onChange: (file: File | null) => void;
}

export default function CoverField({
  value,
  onChange,
}: CoverFieldProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <h3 className="mb-1 text-sm font-semibold text-white">
        Imagem de capa
      </h3>

      <p className="mb-4 text-xs text-zinc-500">
        Escolha a imagem principal do artigo.
      </p>

      <label
        htmlFor="cover"
        className="flex h-52 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-zinc-700 bg-zinc-950 transition hover:border-cyan-500"
      >
        <ImagePlus
          size={40}
          className="mb-3 text-zinc-500"
        />

        <span className="text-sm text-zinc-400">
          Clique para selecionar uma imagem
        </span>

        <span className="mt-1 text-xs text-zinc-600">
          PNG, JPG ou WEBP
        </span>

        <input
          id="cover"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) =>
            onChange(e.target.files?.[0] ?? null)
          }
        />
      </label>

      {value && (
        <div className="mt-4 rounded-lg bg-zinc-950 p-3 text-sm text-zinc-300">
          <strong>Arquivo:</strong>

          <div className="mt-1 break-all">
            {value.name}
          </div>

          <div className="mt-2 text-xs text-zinc-500">
            {(value.size / 1024 / 1024).toFixed(2)} MB
          </div>
        </div>
      )}
    </div>
  );
}