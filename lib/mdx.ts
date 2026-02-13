import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import type { Options as RehypePrettyCodeOptions } from "rehype-pretty-code";

const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
  onVisitLine(node: any) {
    // Prevent empty lines from collapsing in HTML/XML >pre< context
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className = ["line--highlighted"];
  },
  onVisitHighlightedChars(node: any) {
    node.properties.className = ["chars--highlighted"];
  },
};

export async function compileMarkdown(source: string) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(rehypePrettyCode, rehypePrettyCodeOptions)
    .use(rehypeStringify, { allowDangerousHtml: true });

  const result = await processor.process(source);
  return result.toString();
}
