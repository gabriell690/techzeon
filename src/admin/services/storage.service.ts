import { supabase } from "@/lib/supabase";

export async function uploadCover(file: File) {
  const extension = file.name.split(".").pop();

  const fileName = `${crypto.randomUUID()}.${extension}`;

  const filePath = `articles/${fileName}`;

  const { error } = await supabase.storage
    .from("covers")
    .upload(filePath, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from("covers")
    .getPublicUrl(filePath);

  return data.publicUrl;
}