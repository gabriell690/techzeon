/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface Category {
  id: string;

  name: string;

  slug: string;

  description?: string;

  color?: string;

  icon?: string;

  created_at: string;

  updated_at?: string;
}

export interface CreateCategoryDTO {
  name: string;

  slug: string;

  description?: string;

  color?: string;

  icon?: string;
}

export interface UpdateCategoryDTO
  extends Partial<CreateCategoryDTO> {}