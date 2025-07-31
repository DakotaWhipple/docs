---
title: "Copilot Claude"
description: "Greedy algorithms guide with locally optimal choices and key characteristics overview"
---

# Greedy Algorithms

**Greedy** means making the **locally optimal choice** at each step, hoping it leads to a **globally optimal solution**.

* 🎯 **Make the best decision now**
* 🚫 **Never reconsider** previous choices
* ✅ **Trust** that local optimum → global optimum

## 🔑 Key Characteristics

1. **Greedy Choice Property**: A locally optimal choice leads to a globally optimal solution
2. **Optimal Substructure**: An optimal solution contains optimal solutions to subproblems
3. **No Backtracking**: Once you make a choice, you stick with it

## 🧠 When to Use Greedy

Greedy works when the problem has a **"greedy choice property"** - meaning the locally optimal choice is always correct.

Common patterns:
* **Scheduling problems** (earliest deadline first)
* **Interval problems** (earliest end time first)
* **Currency/change problems** (largest denomination first)
* **Minimum spanning trees** (smallest edge first)

## 📝 Example Pattern

```go
func greedyAlgorithm(items []Item) int {
    // 1. Sort by some criteria (usually the greedy choice)
    sort.Slice(items, func(i, j int) bool {
        return items[i].SomeProperty < items[j].SomeProperty
    })
    
    result := 0
    // 2. Iterate and make greedy choices
    for _, item := range items {
        if canTake(item) {
            result += item.Value
            // No backtracking - commit to this choice
        }
    }
    return result
}
```

## 🎯 Classic Example: Activity Selection

Pick maximum number of non-overlapping activities:

```go
type Activity struct {
    Start, End int
}

func maxActivities(activities []Activity) int {
    // Greedy choice: earliest end time first
    sort.Slice(activities, func(i, j int) bool {
        return activities[i].End < activities[j].End
    })
    
    count := 0
    lastEnd := 0
    
    for _, activity := range activities {
        if activity.Start >= lastEnd {
            count++
            lastEnd = activity.End // Commit to this choice
        }
    }
    return count
}
```

---

# Sliding Window

**Sliding Window** is a technique for solving problems on **sequential data** (arrays, strings) by maintaining a **window** that slides through the data.

* 🪟 **Window**: A contiguous subarray/substring
* ➡️ **Sliding**: Moving the window through the data
* 🎯 **Goal**: Find optimal window that satisfies some condition

## 🔄 Two Main Types

### 1. **Fixed Size Window**
Window size is predetermined and constant.

```go
func fixedWindow(nums []int, k int) []int {
    result := []int{}
    
    // Initialize first window
    for i := 0; i < k; i++ {
        // Process nums[i]
    }
    
    // Slide the window
    for i := k; i < len(nums); i++ {
        // Remove nums[i-k] (left edge)
        // Add nums[i] (right edge)
        // Process current window
        result = append(result, windowResult)
    }
    return result
}
```

### 2. **Variable Size Window** (Two Pointers)
Window size changes based on conditions.

```go
func variableWindow(nums []int, target int) int {
    left := 0
    windowSum := 0
    result := 0
    
    for right := 0; right < len(nums); right++ {
        // Expand window
        windowSum += nums[right]
        
        // Shrink window if needed
        for windowSum > target {
            windowSum -= nums[left]
            left++
        }
        
        // Update result with current window
        if windowSum == target {
            result = max(result, right-left+1)
        }
    }
    return result
}
```

## 🎯 Common Patterns

### Pattern 1: **Maximum/Minimum Subarray**
```go
// Find longest subarray with sum ≤ k
for right := 0; right < len(nums); right++ {
    sum += nums[right]
    
    for sum > k {
        sum -= nums[left]
        left++
    }
    
    maxLen = max(maxLen, right-left+1)
}
```

### Pattern 2: **Character Frequency**
```go
// Find longest substring with at most k distinct characters
freq := make(map[byte]int)

for right := 0; right < len(s); right++ {
    freq[s[right]]++
    
    for len(freq) > k {
        freq[s[left]]--
        if freq[s[left]] == 0 {
            delete(freq, s[left])
        }
        left++
    }
    
    maxLen = max(maxLen, right-left+1)
}
```

## 🧠 When to Use Sliding Window

Perfect for problems asking:
* **"Find the longest/shortest subarray/substring..."**
* **"Find all subarrays that satisfy..."**
* **"Maximum/minimum sum of subarray of size k"**

Key indicators:
* ✅ Sequential data (array/string)
* ✅ Contiguous elements
* ✅ Some condition to maintain
* ✅ Need to optimize (max/min/count)

## 🔗 Sliding Window vs Other Approaches

| Approach | Time | Space | When to Use |
|----------|------|-------|-------------|
| **Brute Force** | O(n³) | O(1) | Never for sliding window problems |
| **Sliding Window** | O(n) | O(1) or O(k) | Contiguous subarrays |
| **Two Pointers** | O(n) | O(1) | Sorted arrays, palindromes |
| **Hash Map** | O(n) | O(n) | Non-contiguous, frequency counting |
