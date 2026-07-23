import type { ContentBlock } from "@/types/content";

interface ArticleContentProps {
  content: ContentBlock[];
}

export default function ArticleContent({
  content,
}: ArticleContentProps) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      {content.map((block) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={block.id}>
                {block.content}
              </h2>
            );

          case "paragraph":
            return (
              <p key={block.id}>
                {block.content}
              </p>
            );

          case "image":
            return (
              <figure key={block.id} className="my-8">
                <img
                  src={block.src}
                  alt={block.alt ?? ""}
                  className="rounded-xl w-full"
                />

                {block.caption && (
                  <figcaption className="mt-2 text-center text-sm text-gray-500">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "quote":
            return (
              <blockquote
                key={block.id}
                className="border-l-4 border-primary pl-4 italic"
              >
                {block.content}
              </blockquote>
            );

          case "list":
            return (
              <ul key={block.id}>
                {block.items?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            );

          case "code":
            return (
              <pre key={block.id}>
                <code>{block.content}</code>
              </pre>
            );

          case "video":
            return (
              <div key={block.id} className="aspect-video my-8">
                <iframe
                  src={block.src}
                  className="w-full h-full rounded-xl"
                  allowFullScreen
                />
              </div>
            );

          default:
            return null;
        }
      })}
    </article>
  );
}