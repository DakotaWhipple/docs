---
title: "Cursor Grok"
description: "Greedy algorithms guide covering locally optimal choices and key insights for problem solving"
---

# Greedy Algorithms

Greedy algorithms build up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit.

Key points:
- Make the locally optimal choice at each stage.
- Hope that these local optima lead to a global optimum.
- Efficient but may not always yield the correct solution; works for problems with 'optimal substructure' and 'greedy choice property'.

Example: Activity Selection Problem
- Sort activities by end time.
- Pick the activity that ends first, then the next one that starts after it ends, and so on.

Go example for fractional knapsack (simplified):

```go
type Item struct {
    Value, Weight float64
}

func fractionalKnapsack(items []Item, capacity float64) float64 {
    sort.Slice(items, func(i, j int) bool {
        return items[i].Value/items[i].Weight > items[j].Value/items[j].Weight
    })
    var totalValue float64
    for _, item := range items {
        if capacity >= item.Weight {
            capacity -= item.Weight
            totalValue += item.Value
        } else {
            totalValue += item.Value * (capacity / item.Weight)
            break
        }
    }
    return totalValue
}
```

---

# Sliding Window Technique

The sliding window technique is used to find subarrays or substrings that satisfy given conditions efficiently, often in O(n) time.

Key points:
- Use two pointers to represent the current window.
- Expand the window by moving the right pointer.
- Shrink the window from the left when the condition is violated.
- Track the optimal value as you go.

Types:
- Fixed size window: e.g., maximum sum of subarray of size k.
- Variable size window: e.g., longest substring without repeating characters.

Example: Longest Substring Without Repeating Characters (LeetCode 3)

```go
func lengthOfLongestSubstring(s string) int {
    charSet := make(map[byte]bool)
    left := 0
    maxLength := 0

    for right := 0; right < len(s); right++ {
        for charSet[s[right]] {
            delete(charSet, s[left])
            left++
        }
        charSet[s[right]] = true
        maxLength = max(maxLength, right - left + 1)
    }
    return maxLength
}
```

Remember to import necessary packages and define helper functions like max.
