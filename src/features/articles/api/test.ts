import { articlesApi } from "./articles.api";

export async function testArticles() {
  try {
    const articles = await articlesApi.getAll();

    console.log("ARTIGOS:");
    console.table(articles);
  } catch (err) {
    console.error(err);
  }
}