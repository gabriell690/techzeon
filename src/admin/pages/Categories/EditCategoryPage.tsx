/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CategoryForm from "../Categories/CategoryForm";

import { getCategory } from "@/admin/services/category.service";

import type { Category } from "@/types/category";

export default function EditCategoryPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [category, setCategory] =
    useState<Category>();

  useEffect(() => {
    loadCategory();
  }, []);

  async function loadCategory() {
    try {
      if (!id) return;

      const data = await getCategory(id);

      setCategory(data);
    } catch (error) {
      console.error(error);

      navigate("/admin/categories");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="py-20 text-center text-zinc-400">
        Carregando categoria...
      </div>
    );
  }

  if (!category) {
    return (
      <div className="py-20 text-center text-red-500">
        Categoria não encontrada.
      </div>
    );
  }

  return (
    <CategoryForm
      mode="edit"
      category={category}
    />
  );
}