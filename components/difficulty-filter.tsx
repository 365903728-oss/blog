"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Difficulty = "全部" | "简单" | "中等" | "困难";

type DifficultyFilterProps = {
  value: Difficulty;
  onChange: (value: Difficulty) => void;
};

export function DifficultyFilter({ value, onChange }: DifficultyFilterProps) {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor="difficulty-filter" className="text-sm font-medium text-[rgb(var(--color-text-primary))]">
        难度筛选
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="difficulty-filter"
          className="w-36 border-[rgb(var(--color-border-strong))] bg-[rgb(var(--color-bg-elevated))] text-[rgb(var(--color-text-primary))] hover:border-[rgb(var(--color-accent))] focus:border-[rgb(var(--color-accent))] focus:ring-[rgb(var(--color-accent))] transition-all duration-[var(--transition-fast)]"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="border-[rgb(var(--color-border-strong))] bg-[rgb(var(--color-bg-elevated))]">
          <SelectItem value="全部">全部</SelectItem>
          <SelectItem value="简单">简单</SelectItem>
          <SelectItem value="中等">中等</SelectItem>
          <SelectItem value="困难">困难</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
