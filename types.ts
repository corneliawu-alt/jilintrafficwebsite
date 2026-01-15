
export interface SubCategory {
  id: string;
  title: string;
  content: string | React.ReactNode;
  details?: (string | { text: string; link: string })[];
  imageUrl?: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  subCategories?: SubCategory[];
  content?: string;
}

export type ActiveTab = {
  categoryId: string;
  subCategoryId?: string;
};
