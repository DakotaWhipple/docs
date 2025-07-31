---
title: "Claude Code 2"
description: "Greedy algorithms guide covering locally optimal choices and key insights for problem solving"
---


# Greedy Algorithms

* You make the **locally optimal choice** at each step
* Hope that these local choices lead to a **globally optimal solution**
* **No backtracking** - once you make a choice, you commit to it

## 🔑 Key Insight

Greedy works when:
* The problem has **optimal substructure**
* **Local optimum** → **Global optimum**

Example:

```go
// Greedy coin change (works for standard coin systems)
func coinChange(coins []int, amount int) int {
    sort.Ints(coins) // sort in ascending order
    count := 0
    
    // Start from largest coin
    for i := len(coins) - 1; i >= 0; i-- {
        for amount >= coins[i] {
            amount -= coins[i]
            count++
        }
    }
    return count
}
```

## 🎯 Common Patterns

* **Activity Selection**: Choose non-overlapping activities
* **Fractional Knapsack**: Take items by value/weight ratio
* **Huffman Coding**: Build optimal prefix codes
* **Minimum Spanning Tree**: Kruskal's, Prim's algorithms

---

# Sliding Window

* Maintain a **window** of elements that satisfy some condition
* **Expand** the window by moving the right pointer
* **Shrink** the window by moving the left pointer
* Useful for **subarray/substring** problems

## 🪟 Two Types

### Fixed Size Window
```go
// Find max sum of k consecutive elements
func maxSum(nums []int, k int) int {
    windowSum := 0
    maxSum := 0
    
    // Initial window
    for i := 0; i < k; i++ {
        windowSum += nums[i]
    }
    maxSum = windowSum
    
    // Slide the window
    for i := k; i < len(nums); i++ {
        windowSum += nums[i] - nums[i-k]
        maxSum = max(maxSum, windowSum)
    }
    return maxSum
}
```

### Variable Size Window
```go
// Longest substring with at most k distinct characters
func lengthOfLongestSubstringKDistinct(s string, k int) int {
    left := 0
    maxLen := 0
    charCount := make(map[byte]int)
    
    for right := 0; right < len(s); right++ {
        // Expand window
        charCount[s[right]]++
        
        // Shrink window if needed
        for len(charCount) > k {
            charCount[s[left]]--
            if charCount[s[left]] == 0 {
                delete(charCount, s[left])
            }
            left++
        }
        
        maxLen = max(maxLen, right-left+1)
    }
    return maxLen
}
```

## 🎯 Common Patterns

* **Two Pointers**: `left` and `right` boundaries
* **Hash Map**: Track frequencies/counts in current window
* **Expand/Shrink**: Grow window until invalid, then shrink until valid
* **Update Answer**: Track maximum/minimum as you go