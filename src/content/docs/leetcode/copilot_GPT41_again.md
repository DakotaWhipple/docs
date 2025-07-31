---
title: "Copilot GPT-4.1 (again)"
description: "Greedy algorithms explanation focusing on locally optimal choices and key characteristics"
---

# Greedy

* **Greedy** means: At each step, make the choice that looks best right now.
* You never reconsider your choices—no backtracking.
* Works when **local optimum = global optimum** (not always true!).

Example:

```go
// Greedy: Find minimum number of coins for amount
coins := []int{1, 5, 10, 25}
amount := 37
count := 0
for i := len(coins) - 1; i >= 0; i-- {
    for amount >= coins[i] {
        amount -= coins[i]
        count++
    }
}
```

---

# Sliding Window

* **Sliding Window** is for problems with contiguous subarrays or substrings.
* You maintain a window (range) over the data and move it efficiently.
* Useful for: max/min sum, longest/shortest subarray, etc.

Template:

```go
left, right := 0, 0
for right < len(nums) {
    // expand window by moving right
    // update state

    for window is invalid {
        // shrink window by moving left
        left++
    }

    // maybe update answer
    right++
}
```

Example: Longest substring with at most K distinct chars

```go
left := 0
freq := map[byte]int{}
for right := 0; right < len(s); right++ {
    freq[s[right]]++
    for len(freq) > k {
        freq[s[left]]--
        if freq[s[left]] == 0 {
            delete(freq, s[left])
        }
        left++
    }
    // update answer here
}
```