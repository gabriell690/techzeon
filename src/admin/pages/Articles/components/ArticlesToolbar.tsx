// src/admin/pages/articles/components/ArticlesToolbar.tsx

import CategoryFilter from "./CategoryFilter";
import NewArticleButton from "./NewArticleButton";
import SearchArticles from "./SearchArticles";
import StatusFilter from "./StatusFilter";

interface ArticlesToolbarProps {
  search: string;
  status: string;
  category: string;

  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export default function ArticlesToolbar({
  search,
  status,
  category,
  onSearchChange,
  onStatusChange,
  onCategoryChange,
}: ArticlesToolbarProps) {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-5

        lg:flex-row
        lg:items-center
      "
    >
      <div className="flex-1">
        <SearchArticles
          value={search}
          onChange={onSearchChange}
        />
      </div>

      <div className="w-full lg:w-52">
        <StatusFilter
          value={status}
          onChange={onStatusChange}
        />
      </div>

      <div className="w-full lg:w-56">
        <CategoryFilter
          value={category}
          onChange={onCategoryChange}
        />
      </div>

      <div className="lg:ml-auto">
        <NewArticleButton />
      </div>
    </div>
  );
}