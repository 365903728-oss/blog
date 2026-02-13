这是一个使用 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 创建的 [Next.js](https://nextjs.org) 项目。

## 技术栈

- **Next.js 16** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Content Collections** - 内容管理
- **shadcn/ui** - UI 组件库
- **Shiki** - 代码语法高亮

## 开始使用

首先，运行开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

你可以通过修改 `app/page.tsx` 来开始编辑页面。页面会自动更新。

## 项目结构

```
├── content/           # Markdown 内容
│   ├── blog/          # 博客文章
│   └── problems/      # C++ 题目
├── app/               # Next.js App Router
├── components/         # React 组件
└── lib/               # 工具函数
```

## 功能特性

- **博客系统** - 技术文章分享
- **C++ 题库** - 算法题目集合，支持难度筛选
- **代码高亮** - 使用 Shiki 提供美观的代码高亮

## 了解更多

要了解更多关于 Next.js 的信息，请查看以下资源：

- [Next.js 文档](https://nextjs.org/docs) - 了解 Next.js 功能和 API
- [学习 Next.js](https://nextjs.org/learn) - 交互式 Next.js 教程

你可以查看 [Next.js GitHub 仓库](https://github.com/vercel/next.js) - 欢迎你的反馈和贡献！

## 部署

### GitHub Pages（推荐）

本项目已配置为自动部署到 GitHub Pages。详细的部署步骤请查看 [DEPLOY.md](./DEPLOY.md)。

**快速开始**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/cpp-problems.git
git branch -M main
git push -u origin main
```

然后在 GitHub 仓库设置中启用 Pages，选择 GitHub Actions 作为 Source。

### Vercel

部署 Next.js 应用最简单的方法是使用 Next.js 创建者提供的 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)。

查看我们的 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多详情。
