import { Route, Routes } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";

import Dashboard from "./pages/Dashboard";
import { ArticlesPage } from "./pages/Articles";
import NewArticlePage from "./pages/Articles/NewArticlePage";
import EditArticlePage from "./pages/Articles/EditArticlePage";
import Categories from "./pages/Categories";
import CreateCategoryPage from "./pages/Categories/CreateCategoryPage";
import EditCategoryPage from "./pages/Categories/EditCategoryPage";
import Media from "./pages/Media";
import Authors from "./pages/Authors";
import Settings from "./pages/Settings";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="articles" element={<ArticlesPage />} />
        <Route path="articles/new" element={<NewArticlePage />} />
        <Route
          path="articles/:id/edit"
          element={<EditArticlePage />}
        />

       <Route path="categories" element={<Categories />} />

<Route
  path="categories/new"
  element={<CreateCategoryPage />}
/>

<Route
  path="categories/:id/edit"
  element={<EditCategoryPage />}
/>
        <Route path="media" element={<Media />} />
        <Route path="authors" element={<Authors />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}