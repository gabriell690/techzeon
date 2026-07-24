/* eslint-disable react-hooks/set-state-in-effect */
/* ===========================================================================
   ArticleForm.tsx
   =========================================================================== */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadCover } from "@/admin/services/storage.service";
import { createArticle } from "@/admin/services/article.service";

import {
  CategoryField,
  CoverField,
  ExcerptField,
  SlugField,
  StatusField,
  TagsField,
  TitleField,
} from "./fields";

import {
  MetadataCard,
  PublishCard,
  SEOCard,
} from "./sidebar";

import RichTextEditor from "./editor/RichTextEditor";
import type { Article } from "@/types/article";

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

interface ArticleFormProps {
  mode: "create" | "edit";
  article?: Article;
}

export default function ArticleForm({
  mode,
  article,
}: ArticleFormProps) {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  const [status, setStatus] =
    useState<"draft" | "published">("draft");

  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [cover, setCover] = useState<File | null>(null);

  const [slugLocked, setSlugLocked] = useState(false);

  useEffect(() => {
  if (mode === "edit" && article) {
    setTitle(article.title);
    setSlug(article.slug);
    setExcerpt(article.excerpt ?? "");
    setContent(article.content ?? "");
    setCategory(article.category_id ?? "");
    setStatus(article.status);
  }
}, [mode, article]);

  useEffect(() => {
    if (!slugLocked) {
      setSlug(slugify(title));
    }
  }, [title, slugLocked]);

  async function save(
    publish: "draft" | "published"
  ) {
    try {
      setLoading(true);

      if (!title.trim())
        return alert("Informe um título.");

      if (!content.trim())
        return alert("Digite o conteúdo.");

      // Upload será implementado depois
     let cover_image: string | undefined;

if (cover) {
  cover_image = await uploadCover(cover);
}

console.log({
  title,
  slug,
  excerpt,
  content,
  category,
});

await createArticle({
  title,
  slug,
  excerpt,
  content,
  cover_image,
  author: "Tech Zeon Brasil",
  category_id: category || undefined,
  featured: false,
  status: publish,
});

      alert(
        publish === "published"
          ? "Artigo publicado!"
          : "Rascunho salvo!"
      );

      navigate("/admin/articles");
    } catch (e) {
     console.error("Erro completo:", e);

if (typeof e === "object") {
  console.dir(e);
}

alert(
  e instanceof Error
    ? e.message
    : JSON.stringify(e, null, 2)
);
    } finally {
      setLoading(false);
    }
  }

  function preview() {
    const w = window.open("", "_blank");

    if (!w) return;

    w.document.write(`
      <!DOCTYPE html>

      <html>

      <head>

        <title>${title}</title>

        <style>

          body{
            max-width:900px;
            margin:60px auto;
            padding:24px;
            font-family:Arial;
            line-height:1.8;
          }

          img{
            max-width:100%;
          }

          h1{
            margin-bottom:12px;
          }

        </style>

      </head>

      <body>

        <h1>${title}</h1>

        <p>${excerpt}</p>

        ${content}

      </body>

      </html>
    `);

    w.document.close();
  }

  return (
    <form className="grid gap-6 xl:grid-cols-12">

      <section className="space-y-6 xl:col-span-8">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

          <h2 className="mb-6 text-lg font-semibold text-white">
            Conteúdo do artigo
          </h2>

          <div className="space-y-6">

            <TitleField
              value={title}
              onChange={setTitle}
            />

            <SlugField
              value={slug}
              onChange={(value) => {
                setSlugLocked(true);
                setSlug(slugify(value));
              }}
            />

            <ExcerptField
              value={excerpt}
              onChange={setExcerpt}
            />

            <RichTextEditor
              value={content}
              onChange={setContent}
            />

          </div>

        </div>

      </section>

      <aside className="space-y-6 xl:col-span-4">

        <PublishCard
          loading={loading}
          onPublish={() => save("published")}
          onSaveDraft={() => save("draft")}
          onPreview={preview}
        />

        <StatusField
  value={status}
  onChange={(value) =>
    setStatus(value as "draft" | "published")
  }
/>

        <CategoryField
          value={category}
          onChange={setCategory}
        />

        <TagsField
          value={tags}
          onChange={setTags}
        />

        <CoverField
          value={cover}
          onChange={setCover}
        />

        <SEOCard />

        <MetadataCard />

      </aside>

    </form>
  );
}