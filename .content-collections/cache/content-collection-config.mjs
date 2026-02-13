// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";
var blog = defineCollection({
  name: "Blog",
  directory: "content/blog",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    content: z.string()
  })
});
var problems = defineCollection({
  name: "Problem",
  directory: "content/problems",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    difficulty: z.enum(["\u7B80\u5355", "\u4E2D\u7B49", "\u56F0\u96BE"]),
    tags: z.array(z.string()).default([]),
    sourceUrl: z.string().optional(),
    content: z.string()
  }),
  transform: (document) => ({
    ...document,
    slug: document._meta.path
  })
});
var content_collections_default = defineConfig({
  collections: [blog, problems]
});
export {
  content_collections_default as default
};
