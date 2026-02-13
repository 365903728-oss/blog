import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const blog = defineCollection({
  name: "Blog",
  directory: "content/blog",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    content: z.string(),
  }),
});

const problems = defineCollection({
  name: "Problem",
  directory: "content/problems",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    difficulty: z.enum(["简单", "中等", "困难"]),
    tags: z.array(z.string()).default([]),
    sourceUrl: z.string().optional(),
    content: z.string(),
  }),
  transform: (document) => ({
    ...document,
    slug: document._meta.path,
  }),
});

export default defineConfig({
  collections: [blog, problems],
});
