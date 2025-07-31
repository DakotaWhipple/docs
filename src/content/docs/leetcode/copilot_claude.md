---
title: "Copilot Claude"
description: "Greedy algorithms guide with locally optimal choices and key characteristics overview"
---

# Greedy Algorithms

* **Make the locally optimal choice** at each step
* Hope that these local choices lead to a **globally optimal solution**
* **No backtracking** - once you make a choice, you stick with it

The key insight: Sometimes the best immediate choice actually leads to the best overall result.

## 🎯 When Does Greedy Work?

Greedy works when the problem has **optimal substructure** and the **greedy choice property**:

* **Optimal substructure**: An optimal solution contains optimal solutions to subproblems
* **Greedy choice property**: A globally optimal solution can be reached by making locally optimal choices

## 🔧 Common Greedy Patterns

### 1. Interval Scheduling
```go
// Schedule maximum number of non-overlapping intervals
// Sort by end time, pick earliest ending interval
sort.Slice(intervals, func(i, j int) bool {
    return intervals[i][1] < intervals[j][1]
})
```

### 2. Fractional Knapsack
```go
// Sort by value/weight ratio (highest first)
sort.Slice(items, func(i, j int) bool {
    return items[i].value/items[i].weight > items[j].value/items[j].weight
})
```

### 3. Huffman Coding
```go
// Always merge two nodes with smallest frequencies
// Build optimal prefix-free code
```

## 🧠 Greedy vs Dynamic Programming

| Greedy | Dynamic Programming |
|--------|-------------------|
| Makes one choice per step | Considers all choices |
| No backtracking | Can reconsider decisions |
| Faster (usually O(n log n)) | Slower (usually O(n²) or more) |
| Works only for specific problems | More general approach |

---

# Sliding Window

* **Two pointers** that define a "window" over your data
* The window **slides** (expands or shrinks) based on some condition
* Perfect for **contiguous subarrays/substrings** problems

## 🪟 Types of Sliding Windows

### 1. Fixed Size Window
The window size stays constant, just slides left to right:

```go
func maxSumSubarray(nums []int, k int) int {
    windowSum := 0
    for i := 0; i < k; i++ {
        windowSum += nums[i]
    }
    
    maxSum := windowSum
    for i := k; i < len(nums); i++ {
        windowSum = windowSum - nums[i-k] + nums[i]  // slide
        maxSum = max(maxSum, windowSum)
    }
    return maxSum
}
```

### 2. Variable Size Window
The window grows and shrinks based on conditions:

```go
func lengthOfLongestSubstring(s string) int {
    left, right := 0, 0
    seen := make(map[byte]bool)
    maxLen := 0
    
    for right < len(s) {
        if !seen[s[right]] {
            seen[s[right]] = true
            maxLen = max(maxLen, right-left+1)
            right++
        } else {
            delete(seen, s[left])
            left++
        }
    }
    return maxLen
}
```

## 🎯 Common Sliding Window Patterns

### Pattern 1: "Maximum/Minimum subarray of size K"
- Fixed window size
- Slide and track max/min

### Pattern 2: "Longest subarray with condition X"
- Variable window size
- Expand when condition holds, shrink when violated

### Pattern 3: "Number of subarrays with condition X"
- Count valid windows as you slide

## 🧠 When to Use Sliding Window?

Ask yourself:
- ✅ Do I need contiguous elements?
- ✅ Can I solve it by tracking a window state?
- ✅ Does expanding/shrinking the window help?

If yes → probably sliding window!

## 🔄 Two Pointers vs Sliding Window

| Two Pointers | Sliding Window |
|-------------|----------------|
| Pointers can move independently | Pointers define a window |
| Often for sorted arrays | Often for unsorted subarrays |
| Example: Two Sum in sorted array | Example: Longest substring problems |

---

## 🎨 Algorithm Cheat Sheet

| Problem Type | Algorithm | Time Complexity |
|-------------|-----------|----------------|
| All subsets/permutations | DFS + Include/Exclude | O(2ⁿ) |
| Optimal scheduling | Greedy | O(n log n) |
| Contiguous subarray | Sliding Window | O(n) |
| Tree traversal | DFS | O(n) |
| Graph exploration | DFS/BFS | O(V + E) |