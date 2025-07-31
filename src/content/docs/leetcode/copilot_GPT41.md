---
title: "Copilot GPT-4.1 1"
description: "Greedy algorithms explanation focusing on locally optimal choices and key characteristics"
---


# Greedy

* **Greedy** algorithms make the best choice at each step, hoping it leads to the global optimum.
* You **never reconsider** past choices—no backtracking.

## When to Use

* When a problem has the **greedy-choice property** (local optimum → global optimum)
* Often used for:
  * Interval scheduling
  * Coin change (when denominations allow)
  * Minimizing/maximizing sums, costs, etc.

## Example

```go
// Greedy: Find minimum number of coins
coins := []int{1, 5, 10, 25}
amount := 37
count := 0
for i := len(coins)-1; i >= 0; i-- {
    for amount >= coins[i] {
        amount -= coins[i]
        count++
    }
}
```

---

# Sliding Window

* **Sliding window** is a technique for problems involving **contiguous subarrays or substrings**.
* You maintain a window (range) over the data and move it efficiently.

## When to Use

* When you need to find max/min/sum/average/count of subarrays of size k, or with certain properties
* Common in substring, subarray, and sequence problems

## Example

```go
// Sliding window: Max sum of subarray of size k
nums := []int{1, 2, 3, 4, 5, 6}
k := 3
sum := 0
maxSum := 0
for i := 0; i < k; i++ {
    sum += nums[i]
}
maxSum = sum
for i := k; i < len(nums); i++ {
    sum += nums[i] - nums[i-k]
    if sum > maxSum {
        maxSum = sum
    }
}
```

---