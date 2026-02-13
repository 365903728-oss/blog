---
title: 爬楼梯
difficulty: 简单
tags: ["动态规划"]
sourceUrl: https://leetcode.cn/problems/climbing-stairs/
---

# 爬楼梯

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

## 示例

```cpp
class Solution {
public:
    int climbStairs(int n) {
        if (n <= 2) return n;
        int prev = 1, curr = 2;
        for (int i = 3; i <= n; i++) {
            int next = prev + curr;
            prev = curr;
            curr = next;
        }
        return curr;
    }
};
```

## 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(1)
