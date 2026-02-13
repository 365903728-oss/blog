---
title: 两数之和
difficulty: 简单
tags: ["数组", "哈希表"]
sourceUrl: https://leetcode.cn/problems/two-sum/
---

# 两数之和

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出和为目标值 `target` 的那两个整数，并返回它们的数组下标。

## 示例

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (map.find(complement) != map.end()) {
                return {map[complement], i};
            }
            map[nums[i]] = i;
        }
        return {};
    }
};
```

## 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(n)
