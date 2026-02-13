import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "我的博客和题库",
  description: "基于 Next.js 16 构建的现代化博客和 C++ 算法题库",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
