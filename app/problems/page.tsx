"use client";

import { useMemo, useState } from "react";
import { ProblemCard } from "@/components/problem-card";
import { DifficultyFilter } from "@/components/difficulty-filter";

type Problem = {
  title: string;
  difficulty: string;
  tags: string[];
  sourceUrl?: string;
  slug: string;
};

const mockProblems: Problem[] = [
  {
    title: "两数之和",
    difficulty: "简单",
    tags: ["数组", "哈希表"],
    sourceUrl: "https://leetcode.cn/problems/two-sum/",
    slug: "two-sum",
  },
  {
    title: "爬楼梯",
    difficulty: "简单",
    tags: ["动态规划"],
    sourceUrl: "https://leetcode.cn/problems/climbing-stairs/",
    slug: "climbing-stairs",
  },
  {
    title: "无重复字符的最长子串",
    difficulty: "中等",
    tags: ["字符串", "滑动窗口"],
    sourceUrl: "https://leetcode.cn/problems/longest-substring-without-repeating-characters/",
    slug: "longest-substring",
  },
  {
    title: "寻找两个正序数组的中位数",
    difficulty: "困难",
    tags: ["数组", "二分查找"],
    sourceUrl: "https://leetcode.cn/problems/median-of-two-sorted-arrays/",
    slug: "median-of-two",
  },
];

type Difficulty = "全部" | "简单" | "中等" | "困难";

export default function ProblemsPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>("全部");

  const filteredProblems = useMemo(() => {
    if (selectedDifficulty === "全部") {
      return mockProblems;
    }
    return mockProblems.filter((p) => p.difficulty === selectedDifficulty);
  }, [selectedDifficulty]);

  const stats = useMemo(() => {
    return {
      total: mockProblems.length,
      easy: mockProblems.filter((p) => p.difficulty === "简单").length,
      medium: mockProblems.filter((p) => p.difficulty === "中等").length,
      hard: mockProblems.filter((p) => p.difficulty === "困难").length,
    };
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(var(--color-bg))]">
      <div className="container py-12 md:py-20">
        {/* Header - 标题和筛选器 */}
        <div className="mb-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-[rgb(var(--color-text-primary))]">C++ </span>
              <span className="text-[rgb(var(--color-accent))]">题库</span>
            </h1>

            {/* 统计信息 + 筛选器 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* 统计卡片 */}
              <div className="flex gap-3">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[rgb(var(--color-text-primary))]">
                    {stats.total}
                  </div>
                  <div className="text-sm text-[rgb(var(--color-text-muted))]">全部</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold" style={{ color: 'rgb(var(--color-easy))' }}>
                    {stats.easy}
                  </div>
                  <div className="text-sm text-[rgb(var(--color-text-muted))]">简单</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold" style={{ color: 'rgb(var(--color-medium))' }}>
                    {stats.medium}
                  </div>
                  <div className="text-sm text-[rgb(var(--color-text-muted))]">中等</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold" style={{ color: 'rgb(var(--color-hard))' }}>
                    {stats.hard}
                  </div>
                  <div className="text-sm text-[rgb(var(--color-text-muted))]">困难</div>
                </div>
              </div>

              {/* 筛选器 */}
              <DifficultyFilter value={selectedDifficulty} onChange={setSelectedDifficulty} />
            </div>
          </div>
        </div>

        {/* 题目列表 */}
        <div className="max-w-7xl mx-auto">
          {filteredProblems.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProblems.map((problem, index) => (
                <div
                  key={problem.slug}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProblemCard problem={problem} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[rgb(var(--color-bg-subtle))]">
                <svg className="w-10 h-10 text-[rgb(var(--color-text-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 15.656l6.828-6.828a4 4 0 015.656-15.656c0-3.2-2.28-5.672-5.672s1.4 0 6.828 6.828a4 4 0 015.656 15.656z" />
                </svg>
              </div>
              <p className="mt-6 text-lg text-[rgb(var(--color-text-muted))]">
                没有找到符合条件的题目
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
