---
title: 无重复字符的最长子串
difficulty: 中等
tags: ["字符串", "滑动窗口"]
sourceUrl: https://leetcode.cn/problems/longest-substring-without-repeating-characters/
---

# 无重复字符的最长子串

给定一个字符串 `s`，请你找出其中不含有重复字符的**最长子串**的长度。

## 示例

```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> lastSeen;
        int left = 0, maxLen = 0;

        for (int right = 0; right < s.size(); right++) {
            if (lastSeen.find(s[right]) != lastSeen.end()) {
                left = max(left, lastSeen[s[right]] + 1);
            }
            lastSeen[s[right]] = right;
            maxLen = max(maxLen, right - left + 1);
        }
        return maxLen;
    }
};
```

## 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(min(m, n))，其中 m 是字符集大小
