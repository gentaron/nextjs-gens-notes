import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "omlpr7uq", // ← SanityのプロジェクトID
  dataset: "gensnotessanity", // ← Sanityで使ってるdataset名
  apiVersion: "2024-01-01", // ← 好きな日付（フォーマットは YYYY-MM-DD）
  useCdn: false, // draftも読みたいなら false
});
