import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type Problem = {
  title: string;
  difficulty: string;
  tags: string[];
  sourceUrl?: string;
  slug: string;
};

const difficultyColors = {
  简单: "bg-green-500/20 text-green-700 border-green-500/30",
  中等: "bg-yellow-500/20 text-yellow-700 border-yellow-500/30",
  困难: "bg-red-500/20 text-red-700 border-red-500/30",
};

export function ProblemCard({ problem }: { problem: Problem }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            <Link href={`/problems/${problem.slug}`}>
              {problem.title}
            </Link>
          </CardTitle>
          <Badge className={difficultyColors[problem.difficulty as keyof typeof difficultyColors]}>
            {problem.difficulty}
          </Badge>
        </div>
        <CardDescription className="flex flex-wrap gap-2">
          {problem.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>
      {problem.sourceUrl && (
        <CardContent>
          <a
            href={problem.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            查看原题 →
          </a>
        </CardContent>
      )}
    </Card>
  );
}
