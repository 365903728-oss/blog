import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - 大胆的留白和排版 */}
      <section className="container py-32 md:py-48">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="mb-6 md:mb-8">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[rgb(var(--color-text-primary))]">
                我的博客
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[rgb(var(--color-accent))]">
                和题库
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto leading-relaxed">
              基于 Next.js 16 构建的现代化网站，包含技术博客和 C\+\+\+ 算法题库。
            </p>
          </div>

          {/* 行动按钮 - 大胆、清晰 */}
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Link
              href="/problems"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg transition-all duration-[var(--transition-base)] hover:duration-[var(--transition-fast)] bg-[rgb(var(--color-accent))] text-white hover:bg-[rgb(var(--color-accent-hover))] shadow-md hover:shadow-lg"
            >
              浏览题库
              <span className="absolute inset-0 rounded-lg ring-2 ring-[rgb(var(--color-accent))] ring-opacity-0 group-hover:ring-opacity-100 transition-all duration-[var(--transition-base)]" />
            </Link>
            <Link
              href="/blog"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg transition-all duration-[var(--transition-base)] hover:duration-[var(--transition-fast)] border-2 border-[rgb(var(--color-border-strong))] bg-transparent text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-bg-elevated))] hover:border-[rgb(var(--color-accent))]
            >
              阅读博客
            </Link>
          </div>
        </div>
      </section>

      {/* 装饰性分隔线 */}
      <div className="container">
        <div className="divider max-w-xs mx-auto" />
      </div>

      {/* Features Section - 清晰的信息架构 */}
      <section className="container py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 md:mb-20">
            特性
          </h2>

          <div className="grid gap-12 md:grid-cols-3">
            {/* 特性 1 */}
            <div className="text-center group">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[rgb(var(--color-accent-subtle))] group-hover:bg-[rgb(var(--color-accent))] transition-colors duration-[var(--transition-base)]">
                <svg className="w-8 h-8 text-[rgb(var(--color-accent))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l7-7 1.21-1.21 1.21 1.21z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Next.js 16
              </h3>
              <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">
                使用最新的 App Router、React 19 和 Server Components
              </p>
            </div>

            {/* 特性 2 */}
            <div className="text-center group">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[rgb(var(--color-accent-subtle))] group-hover:bg-[rgb(var(--color-accent))] transition-colors duration-[var(--transition-base)]">
                <svg className="w-8 h-8 text-[rgb(var(--color-accent))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4H6a2 2 0 00-2-2V6a2 2 0 00-2 2h2a2 2 0 002 2v12a2 2 0 002-2h-4l-4 4M9 18l4 4-4 4H6a2 2 0 00-2-2V6a2 2 0 00-2-2h2a2 2 0 002 2v12a2 2 0 002-2h-4l-4-4" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                C++ 题库
              </h3>
              <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">
                支持难度筛选的算法题库，包含完整代码和解析
              </p>
            </div>

            {/* 特性 3 */}
            <div className="text-center group">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[rgb(var(--color-accent-subtle))] group-hover:bg-[rgb(var(--color-accent))] transition-colors duration-[var(--transition-base)]">
                <svg className="w-8 h-8 text-[rgb(var(--color-accent))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 01-6 0V4a1 1 0 01-1 1h2a1 1 0 011 1v10a1 1 0 011-1h-6a1 1 0 01-1V6a1 1 0 01-1 1-1 1-3 0 01-6 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                代码高亮
              </h3>
              <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">
                使用 Shiki 提供美观的代码语法高亮
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 装饰性分隔线 */}
      <div className="container">
        <div className="divider max-w-xs mx-auto" />
      </div>

      {/* CTA Section - 引导用户行动 */}
      <section className="container py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              准备好了吗？
            </h2>
            <p className="text-lg md:text-xl text-[rgb(var(--color-text-secondary))] mb-10 max-w-2xl mx-auto">
              开始探索题库，或阅读最新的技术博客文章
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/problems"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg transition-all duration-[var(--transition-base)] hover:duration-[var(--transition-fast)] bg-[rgb(var(--color-text-primary))] text-white hover:bg-[rgb(var(--color-accent))] shadow-md hover:shadow-lg"
              >
                查看题库
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg transition-all duration-[var(--transition-base)] hover:duration-[var(--transition-fast)] border-2 border-[rgb(var(--color-text-primary))] bg-transparent text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-bg-elevated))]
              >
                浏览博客
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
