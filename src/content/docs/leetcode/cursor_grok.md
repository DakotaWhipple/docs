---
title: "Cursor Grok"
description: "Greedy algorithms guide covering locally optimal choices and key insights for problem solving"
---

# Greedy

* Greedy algorithms make the locally optimal choice at each stage with the hope of finding a global optimum.
* They are often used for optimization problems.
* Key: Prove that the greedy choice property holds and that it leads to optimal solution.

Example: Minimum number of coins for change (but note it may not always be optimal without proper coin denominations).

```go
// Greedy example: Activity Selection
func activitySelection(activities [][]int) int {
    sort.Slice(activities, func(i, j int) bool {
        return activities[i][1] < activities[j][1]
    })
    count := 1
    end := activities[0][1]
    for i := 1; i < len(activities); i++ {
        if activities[i][0] >= end {
            count++
            end = activities[i][1]
        }
    }
    return count
}
```

---

# Sliding Window

* Technique for problems involving arrays or strings where we maintain a window of elements that satisfies certain conditions.
* We expand or shrink the window by moving pointers (usually left and right).
* Useful for finding subarrays/substrings with specific properties.

Example: Find the maximum sum of a subarray of fixed size k.

```go
func maxSumSubarray(arr []int, k int) int {
    if len(arr) < k {
        return 0 // or handle error
    }
    maxSum := 0
    currentSum := 0
    for i := 0; i < k; i++ {
        currentSum += arr[i]
    }
    maxSum = currentSum
    for i := k; i < len(arr); i++ {
        currentSum = currentSum - arr[i-k] + arr[i]
        if currentSum > maxSum {
            maxSum = currentSum
        }
    }
    return maxSum
}
```
