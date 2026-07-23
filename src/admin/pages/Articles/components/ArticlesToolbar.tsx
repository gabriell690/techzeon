import { useState } from "react";

import CategoryFilter from "./CategoryFilter";
import NewArticleButton from "./NewArticleButton";
import SearchArticles from "./SearchArticles";
import StatusFilter from "./StatusFilter";

export default function ArticlesToolbar() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-3
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-4
        sm:p-5
        lg:flex
        lg:items-center
      "
    >
      <div className="w-full lg:w-80">
        <SearchArticles
          value={search}
          onChange={setSearch}
        />
      </div>

      <div className="w-full lg:w-52">
        <StatusFilter
          value={status}
          onChange={setStatus}
        />
      </div>

      <div className="w-full lg:w-52">
        <CategoryFilter
          value={category}
          onChange={setCategory}
        />
      </div>

      <div className="w-full lg:ml-auto lg:w-auto">
        <NewArticleButton />
      </div>
    </div>
  );
}