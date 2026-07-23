import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Category from "../pages/Category/CategoryPage";
import Article from "../pages/Article";
import Search from "../pages/Search/Search";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

import LoginPage from "@/auth/LoginPage";
import ProtectedRoute from "@/auth/ProtectedRoute";
import PrivacyPolicyPage from "../pages/PrivacyPolicePage";
import TermsPage from "../pages/TermsPage";
import AdminRoutes from "@/admin/routes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* SITE */}
 <Route element={<MainLayout />}>
  <Route path="/" element={<Home />} />
  <Route path="/categoria/:slug" element={<Category />} />
  <Route path="/artigo/:slug" element={<Article />} />
  <Route path="/buscar" element={<Search />} />
  <Route path="/sobre" element={<About />} />
  <Route path="/contato" element={<Contact />} />

  <Route
    path="/politica-de-privacidade"
    element={<PrivacyPolicyPage />}
  />

  <Route
    path="/termos-de-uso"
    element={<TermsPage />}
  />
</Route>
        {/* LOGIN */}
        <Route path="/login" element={<LoginPage />} />

        {/* ADMIN */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}