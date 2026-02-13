import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
          欢迎来到我的博客和题库
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          基于 Next.js 16 构建的现代化网站，包含技术博客和 C++ 算法题库。
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/problems">浏览题库</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">阅读博客</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">特性</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Next.js 16</h3>
            <p className="text-muted-foreground">
              使用最新的 App Router、React 19 和 Server Components
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">C++ 题库</h3>
            <p className="text-muted-foreground">
              支持难度筛选的算法题库，包含完整代码和解析
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">代码高亮</h3>
            <p className="text-muted-foreground">
              使用 Shiki 提供美观的代码语法高亮
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
