import { CardContent } from "@/components/ui/card";
import Link from "next/link";

type Problem = {
  title: string;
  difficulty: string;
  tags: string[];
  sourceUrl?: string;
  slug: string;
};

const difficultyColors = {
  简单: "bg-[rgb(var(--color-easy))] text-white",
  中等: "bg-[rgb(var(--color-medium))] text-white",
  困难: "bg-[rgb(var(--color-hard))] text-white",
};

export function ProblemCard({ problem }: { problem: Problem }) {
  return (
    <div className="group h-full">
      <div className="relative h-full rounded-2xl bg-[rgb(var(--color-bg-elevated))] border border-[rgb(var(--color-border))] transition-all duration-[var(--transition-base)] hover:duration-[var(--transition-fast)] hover:border-[rgb(var(--color-accent))] hover:shadow-lg p-6 flex flex-col">
        {/* 标题和难度 */}
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-[rgb(var(--color-accent))] transition-colors duration-[var(--transition-fast)]">
            <Link href={`/problems/${problem.slug}`} className="hover:underline decoration-2 underline-offset-4 decoration-[rgb(var(--color-accent))]">
              {problem.title}
            </Link>
          </h3>
          <span
            className={`inline-block px-3 py-1 text-sm font-medium rounded-lg ${difficultyColors[problem.difficulty as keyof typeof difficultyColors]}`}
          >
            {problem.difficulty}
          </span>
        </div>

        {/* 标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {problem.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm border border-[rgb(var(--color-border))] rounded-lg text-[rgb(var(--color-text-secondary))] hover:border-[rgb(var(--color-accent))] hover:text-[rgb(var(--color-text-primary))] transition-all duration-[var(--transition-fast)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 原题链接 */}
        {problem.sourceUrl && (
          <div className="mt-auto pt-4 border-t border-[rgb(var(--color-border))]">
            <a
              href={problem.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-accent))] transition-colors duration-[var(--transition-fast)] inline-flex items-center gap-1"
            >
              查看原题
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7-7m7 7m0 0l-7-7m7 7m0 0l-7-7m7 7m0 0l-7-7m7 7m0 0l-7-7M5 12h14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
