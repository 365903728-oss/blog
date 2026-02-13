---
title: 寻找两个正序数组的中位数
difficulty: 困难
tags: ["数组", "二分查找"]
sourceUrl: https://leetcode.cn/problems/median-of-two-sorted-arrays/
---

# 寻找两个正序数组的中位数

给定两个大小分别为 `m` 和 `n` 的正序（从小到大）数组 `nums1` 和 `nums2`。请你找出并返回这两个正序数组的**中位数**。

## 示例

```cpp
class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int m = nums1.size(), n = nums2.size();
        if (m > n) return findMedianSortedArrays(nums2, nums1);

        int left = 0, right = m;
        while (left <= right) {
            int partition1 = (left + right) / 2;
            int partition2 = (m + n + 1) / 2 - partition1;

            int maxLeft1 = partition1 == 0 ? INT_MIN : nums1[partition1 - 1];
            int minRight1 = partition1 == m ? INT_MAX : nums1[partition1];
            int maxLeft2 = partition2 == 0 ? INT_MIN : nums2[partition2 - 1];
            int minRight2 = partition2 == n ? INT_MAX : nums2[partition2];

            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                if ((m + n) % 2 == 0) {
                    return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2.0;
                } else {
                    return max(maxLeft1, maxLeft2);
                }
            } else if (maxLeft1 > minRight2) {
                right = partition1 - 1;
            } else {
                left = partition1 + 1;
            }
        }
        return 0.0;
    }
};
```

## 复杂度分析

- 时间复杂度：O(log(min(m, n)))
- 空间复杂度：O(1)
