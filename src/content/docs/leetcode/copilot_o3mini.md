---
title: "Copilot O3 Mini"
description: "Greedy algorithms overview with practical examples including coin change implementation"
---

# Greedy

* Greedy means making the locally optimal choice at each step, hoping it leads to a global optimum.
* You pick the best option available now without reconsidering previous decisions.

Example:

```go
// Greedy example: coin change with coins sorted descending
func coinChange(coins []int, amount int) int {
    count := 0
    for _, coin := range coins {
        if amount >= coin {
            count += amount / coin
            amount %= coin
        }
    }
    if amount != 0 {
        return -1
    }
    return count
}
```

---

# Sliding Window

* Sliding Window is used to find a subarray that satisfies a condition (like maximum sum or longest substring) in O(n) time.
* You maintain a window [left, right) and adjust boundaries as you go.

Example:

```go
// Sliding window example: longest substring without repeating characters
func lengthOfLongestSubstring(s string) int {
    charIndex := make(map[byte]int)
    maxLen := 0
    left := 0
    for right := 0; right < len(s); right++ {
        if idx, found := charIndex[s[right]]; found && idx >= left {
            left = idx + 1
        }
        charIndex[s[right]] = right
        if currLen := right - left + 1; currLen > maxLen {
            maxLen = currLen
        }
    }
    return maxLen
}
```
