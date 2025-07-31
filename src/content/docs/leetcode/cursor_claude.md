---
title: "Cursor Claude"
description: "Greedy algorithms guide covering locally optimal choices and key insights for problem solving"
---

# Greedy Algorithm

* You make the **locally optimal choice** at each step
* Hope that this leads to a **globally optimal solution**
* Key insight: **Never look back** - once you make a choice, you commit to it

**When does greedy work?**
* The problem has **optimal substructure**
* **Greedy choice property**: Local optimum leads to global optimum

Example:

```go
// Greedy approach for activity selection
func maxActivities(start, end []int) int {
    // Sort by end time (greedy choice: pick earliest ending)
    sort.Slice(activities, func(i, j int) bool {
        return end[i] < end[j]
    })
    
    count := 1
    lastEnd := end[0]
    
    for i := 1; i < len(start); i++ {
        if start[i] >= lastEnd {  // No overlap
            count++
            lastEnd = end[i]  // Greedy: always pick this one
        }
    }
    return count
}
```

---

## 🎯 Greedy Strategy Pattern

At each step, ask: **"What's the best choice RIGHT NOW?"**

Common greedy strategies:
* **Earliest deadline first** (scheduling)
* **Smallest/largest first** (optimization)
* **Closest/farthest first** (pathfinding)

```
Step 1: Pick best option → Commit
Step 2: Pick best option → Commit  
Step 3: Pick best option → Commit
...
```

**No backtracking!** Unlike DFS, you never reconsider previous choices.

---

# Sliding Window

* Maintain a **window** (subarray) that **slides** through the array
* **Expand** window to include more elements
* **Shrink** window when condition is violated
* **Track** the best result seen so far

Two main patterns:

## 🔄 Fixed Window Size

```go
// Find max sum of k consecutive elements
func maxSum(nums []int, k int) int {
    windowSum := 0
    // Build initial window
    for i := 0; i < k; i++ {
        windowSum += nums[i]
    }
    
    maxSum := windowSum
    // Slide the window
    for i := k; i < len(nums); i++ {
        windowSum += nums[i]      // Add new element
        windowSum -= nums[i-k]    // Remove old element
        maxSum = max(maxSum, windowSum)
    }
    return maxSum
}
```

## 🎯 Variable Window Size

```go
// Longest substring with at most k distinct characters
func longestSubstring(s string, k int) int {
    left, right := 0, 0
    charCount := make(map[byte]int)
    maxLen := 0
    
    for right < len(s) {
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
        
        // Update result
        maxLen = max(maxLen, right-left+1)
        right++
    }
    return maxLen
}
```

---

## 🏃‍♂️ Sliding Window Mental Model

Think of it like a **rubber band** on an array:

```
[1, 2, 3, 4, 5, 6, 7, 8]
 |-----|                    Window: [1,2,3]
    |-----|                 Slide right: [2,3,4]
       |-----|              Slide right: [3,4,5]
```

**Two pointers strategy:**
* `left`: Start of window
* `right`: End of window  
* Move them to **maintain some condition**

**When to use sliding window:**
* Need to find **subarray/substring** with some property
* Can **incrementally update** the result as window changes
* **Contiguous elements** matter (unlike two pointers on sorted array)
