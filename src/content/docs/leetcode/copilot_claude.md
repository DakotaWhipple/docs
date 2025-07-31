---
title: "Copilot Claude"
description: "Greedy algorithms guide with locally optimal choices and key characteristics overview"
---

# Greedy Algorithms

* Make the **locally optimal choice** at each step
* Hope that this leads to a **globally optimal solution**
* Once you make a choice, you **never reconsider** it

## 🎯 Key Insight: "Best Now = Best Overall"

Greedy works when:
* The problem has **optimal substructure**
* Making the best local choice doesn't prevent finding the global optimum

Example:

```go
// Greedy: Activity Selection
func activitySelection(activities []Activity) []Activity {
    sort.Slice(activities, func(i, j int) bool {
        return activities[i].end < activities[j].end // Sort by end time
    })
    
    result := []Activity{activities[0]}
    lastEnd := activities[0].end
    
    for i := 1; i < len(activities); i++ {
        if activities[i].start >= lastEnd {
            result = append(result, activities[i])
            lastEnd = activities[i].end
        }
    }
    return result
}
```

## 🔄 Common Greedy Patterns:

1. **Sort first**, then greedily pick
2. **Priority Queue/Heap** for always getting the "best" next choice
3. **Interval problems**: Sort by start/end time
4. **Array problems**: Take the best available at each position

## 🚨 When Greedy Fails:

```
// Coin change with coins [1, 3, 4] and amount 6
// Greedy: 4 + 1 + 1 = 3 coins ❌
// Optimal: 3 + 3 = 2 coins ✅
```

Greedy doesn't always work! Use **Dynamic Programming** when you need to consider all possibilities.

---

# Sliding Window

* Use **two pointers** to maintain a "window" over an array/string
* The window **slides** (expands/contracts) based on some condition
* Avoids nested loops → **O(n) instead of O(n²)**

## 🪟 Two Types:

### 1. Fixed Size Window
```go
// Find max sum of k consecutive elements
func maxSumSubarray(nums []int, k int) int {
    windowSum := 0
    for i := 0; i < k; i++ {
        windowSum += nums[i]
    }
    
    maxSum := windowSum
    for i := k; i < len(nums); i++ {
        windowSum += nums[i] - nums[i-k] // Slide window
        maxSum = max(maxSum, windowSum)
    }
    return maxSum
}
```

### 2. Variable Size Window
```go
// Longest substring with at most k distinct characters
func lengthOfLongestSubstringKDistinct(s string, k int) int {
    left := 0
    charCount := make(map[byte]int)
    maxLen := 0
    
    for right := 0; right < len(s); right++ {
        charCount[s[right]]++
        
        // Shrink window if too many distinct chars
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

## 🎯 Common Sliding Window Patterns:

1. **Expand right pointer** until condition is violated
2. **Contract left pointer** to restore condition
3. **Track the best** (max/min) window seen so far

## 🔧 When to Use Sliding Window:

* **Subarray/substring** problems
* **Contiguous elements** matter
* You need to **avoid O(n²)** brute force
* Problems with words like: "longest", "shortest", "maximum", "minimum" + "subarray/substring"

## 🧠 Mental Model:

Think of it like a **rubber band** that stretches and contracts:

```
[a, b, c, d, e, f, g]
 ^     ^
left  right  (window = [a,b,c])

[a, b, c, d, e, f, g]
    ^        ^
   left    right  (window = [b,c,d,e])
```

The window **slides** through the array, always maintaining some property!