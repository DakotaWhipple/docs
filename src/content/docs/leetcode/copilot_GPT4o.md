---
title: "Copilot GPT-4o"
description: "Greedy algorithms explanation focusing on locally optimal choices and key characteristics"
---

# Greedy Algorithm

* A **greedy algorithm** makes the **locally optimal choice** at each step with the hope of finding the global optimum.
* It doesn’t backtrack or reconsider decisions.

When to use:

* The problem has an **optimal substructure** (optimal solution can be built from optimal solutions of subproblems).
* Making a **greedy choice** at each step leads to the global optimum.

Example:

```go
// Greedy algorithm to find the maximum number of activities
func maxActivities(start []int, end []int) int {
    n := len(start)
    activities := make([][2]int, n)
    for i := 0; i < n; i++ {
        activities[i] = [2]int{end[i], start[i]}
    }
    sort.Slice(activities, func(i, j int) bool {
        return activities[i][0] < activities[j][0]
    })

    count, lastEnd := 0, -1
    for _, activity := range activities {
        if activity[1] >= lastEnd {
            count++
            lastEnd = activity[0]
        }
    }
    return count
}
```

---

# Sliding Window

* The **sliding window** technique is used to efficiently solve problems involving **contiguous subarrays or substrings**.
* It involves maintaining a **window** (a range of elements) and adjusting its size or position as needed.

When to use:

* The problem involves **subarrays** or **substrings**.
* You need to optimize for **time complexity**.

Example:

```go
// Sliding window to find the maximum sum of a subarray of size k
func maxSumSubarray(nums []int, k int) int {
    n := len(nums)
    if n < k {
        return 0
    }

    maxSum, windowSum := 0, 0
    for i := 0; i < k; i++ {
        windowSum += nums[i]
    }
    maxSum = windowSum

    for i := k; i < n; i++ {
        windowSum += nums[i] - nums[i-k]
        if windowSum > maxSum {
            maxSum = windowSum
        }
    }
    return maxSum
}
```

---