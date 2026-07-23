import type { ContentBlock } from "@/types/content";

interface ContentRendererProps {
  content: ContentBlock[];
}

export default function ContentRenderer({
  content,
}: ContentRendererProps) {
  return (
    <>
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={block.id ?? index} className="mb-4 mt-10 text-3xl font-bold">
                {block.content}
              </h2>
            );

          case "paragraph":
            return (
              <p key={block.id ?? index} className="mb-6 leading-8">
                {block.content}
              </p>
            );

          case "image":
            return (
              <img
                key={block.id ?? index}
                src={block.src}
                alt={block.alt ?? ""}
                className="my-8 w-full rounded-xl"
              />
            );

          case "quote":
            return (
              <blockquote
                key={block.id ?? index}
                className="my-8 border-l-4 border-blue-600 pl-4 italic"
              >
                {block.content}
              </blockquote>
            );

          case "list":
            return (
              <ul key={block.id ?? index} className="mb-6 list-disc pl-6">
                {block.items?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );

          case "code":
            return (
              <pre
                key={block.id ?? index}
                className="my-6 overflow-auto rounded-xl bg-zinc-900 p-4"
              >
                <code>{block.content}</code>
              </pre>
            );

          case "video":
            return (
              <iframe
                key={block.id ?? index}
                src={block.src}
                className="my-8 aspect-video w-full rounded-xl"
                allowFullScreen
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}