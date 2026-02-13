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

// 这里会在构建时由 Content Collections 生成真实数据
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

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">C++ 题库</h1>
        <DifficultyFilter value={selectedDifficulty} onChange={setSelectedDifficulty} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProblems.map((problem) => (
          <ProblemCard key={problem.slug} problem={problem} />
        ))}
      </div>

      {filteredProblems.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          没有找到符合条件的题目
        </div>
      )}
    </div>
  );
}
