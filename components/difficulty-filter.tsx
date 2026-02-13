"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Difficulty = "全部" | "简单" | "中等" | "困难";

type DifficultyFilterProps = {
  value: Difficulty;
  onChange: (value: Difficulty) => void;
};

export function DifficultyFilter({ value, onChange }: DifficultyFilterProps) {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor="difficulty-filter" className="text-sm font-medium">
        难度筛选：
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id="difficulty-filter" className="w-32">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="全部">全部</SelectItem>
          <SelectItem value="简单">简单</SelectItem>
          <SelectItem value="中等">中等</SelectItem>
          <SelectItem value="困难">困难</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
