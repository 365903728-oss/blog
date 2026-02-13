
export default [
  {
    "title": "爬楼梯",
    "difficulty": "简单",
    "tags": [
      "动态规划"
    ],
    "sourceUrl": "https://leetcode.cn/problems/climbing-stairs/",
    "content": "# 爬楼梯\n\n假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？\n\n## 示例\n\n```cpp\nclass Solution {\npublic:\n    int climbStairs(int n) {\n        if (n <= 2) return n;\n        int prev = 1, curr = 2;\n        for (int i = 3; i <= n; i++) {\n            int next = prev + curr;\n            prev = curr;\n            curr = next;\n        }\n        return curr;\n    }\n};\n```\n\n## 复杂度分析\n\n- 时间复杂度：O(n)\n- 空间复杂度：O(1)",
    "_meta": {
      "filePath": "climbing-stairs.md",
      "fileName": "climbing-stairs.md",
      "directory": ".",
      "extension": "md",
      "path": "climbing-stairs"
    },
    "slug": "climbing-stairs"
  },
  {
    "title": "无重复字符的最长子串",
    "difficulty": "中等",
    "tags": [
      "字符串",
      "滑动窗口"
    ],
    "sourceUrl": "https://leetcode.cn/problems/longest-substring-without-repeating-characters/",
    "content": "# 无重复字符的最长子串\n\n给定一个字符串 `s`，请你找出其中不含有重复字符的**最长子串**的长度。\n\n## 示例\n\n```cpp\nclass Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        unordered_map<char, int> lastSeen;\n        int left = 0, maxLen = 0;\n\n        for (int right = 0; right < s.size(); right++) {\n            if (lastSeen.find(s[right]) != lastSeen.end()) {\n                left = max(left, lastSeen[s[right]] + 1);\n            }\n            lastSeen[s[right]] = right;\n            maxLen = max(maxLen, right - left + 1);\n        }\n        return maxLen;\n    }\n};\n```\n\n## 复杂度分析\n\n- 时间复杂度：O(n)\n- 空间复杂度：O(min(m, n))，其中 m 是字符集大小",
    "_meta": {
      "filePath": "longest-substring.md",
      "fileName": "longest-substring.md",
      "directory": ".",
      "extension": "md",
      "path": "longest-substring"
    },
    "slug": "longest-substring"
  },
  {
    "title": "寻找两个正序数组的中位数",
    "difficulty": "困难",
    "tags": [
      "数组",
      "二分查找"
    ],
    "sourceUrl": "https://leetcode.cn/problems/median-of-two-sorted-arrays/",
    "content": "# 寻找两个正序数组的中位数\n\n给定两个大小分别为 `m` 和 `n` 的正序（从小到大）数组 `nums1` 和 `nums2`。请你找出并返回这两个正序数组的**中位数**。\n\n## 示例\n\n```cpp\nclass Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        int m = nums1.size(), n = nums2.size();\n        if (m > n) return findMedianSortedArrays(nums2, nums1);\n\n        int left = 0, right = m;\n        while (left <= right) {\n            int partition1 = (left + right) / 2;\n            int partition2 = (m + n + 1) / 2 - partition1;\n\n            int maxLeft1 = partition1 == 0 ? INT_MIN : nums1[partition1 - 1];\n            int minRight1 = partition1 == m ? INT_MAX : nums1[partition1];\n            int maxLeft2 = partition2 == 0 ? INT_MIN : nums2[partition2 - 1];\n            int minRight2 = partition2 == n ? INT_MAX : nums2[partition2];\n\n            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {\n                if ((m + n) % 2 == 0) {\n                    return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2.0;\n                } else {\n                    return max(maxLeft1, maxLeft2);\n                }\n            } else if (maxLeft1 > minRight2) {\n                right = partition1 - 1;\n            } else {\n                left = partition1 + 1;\n            }\n        }\n        return 0.0;\n    }\n};\n```\n\n## 复杂度分析\n\n- 时间复杂度：O(log(min(m, n)))\n- 空间复杂度：O(1)",
    "_meta": {
      "filePath": "median-of-two.md",
      "fileName": "median-of-two.md",
      "directory": ".",
      "extension": "md",
      "path": "median-of-two"
    },
    "slug": "median-of-two"
  },
  {
    "title": "两数之和",
    "difficulty": "简单",
    "tags": [
      "数组",
      "哈希表"
    ],
    "sourceUrl": "https://leetcode.cn/problems/two-sum/",
    "content": "# 两数之和\n\n给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出和为目标值 `target` 的那两个整数，并返回它们的数组下标。\n\n## 示例\n\n```cpp\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> map;\n        for (int i = 0; i < nums.size(); i++) {\n            int complement = target - nums[i];\n            if (map.find(complement) != map.end()) {\n                return {map[complement], i};\n            }\n            map[nums[i]] = i;\n        }\n        return {};\n    }\n};\n```\n\n## 复杂度分析\n\n- 时间复杂度：O(n)\n- 空间复杂度：O(n)",
    "_meta": {
      "filePath": "two-sum.md",
      "fileName": "two-sum.md",
      "directory": ".",
      "extension": "md",
      "path": "two-sum"
    },
    "slug": "two-sum"
  }
]