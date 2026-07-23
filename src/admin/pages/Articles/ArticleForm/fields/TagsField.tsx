import { type KeyboardEvent, useState } from "react";
import { X } from "lucide-react";

interface TagsFieldProps {
  value: string[];
  onChange: (tags: string[]) => void;
}

export default function TagsField({
  value,
  onChange,
}: TagsFieldProps) {
  const [input, setInput] = useState("");

  function addTag() {
    const tag = input.trim();

    if (!tag) return;

    if (value.includes(tag)) {
      setInput("");
      return;
    }

    onChange([...value, tag]);
    setInput("");
  }

  function removeTag(tag: string) {
    onChange(value.filter((item) => item !== tag));
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <h3 className="mb-1 text-sm font-semibold text-white">
        Tags
      </h3>

      <p className="mb-4 text-xs text-zinc-500">
        Pressione Enter para adicionar uma tag.
      </p>

      <input
        type="text"
        value={input}
        placeholder="Digite uma tag..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
      />

      {value.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {value.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-2 rounded-full bg-cyan-600/20 px-3 py-1 text-sm text-cyan-300"
            >
              {tag}

              <button
                type="button"
                onClick={() => removeTag(tag)}
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}