---
title: "Cursor GPT-4.1"
description: "Greedy algorithms guide covering locally optimal choices and key insights for problem solving"
---

# Greedy

* At each step, make the **locally optimal choice**—the one that looks best right now.
* Hope that these local choices lead to a **global optimum**.

When does greedy work?
- The problem must have the **greedy-choice property** (a global optimum can be reached by choosing local optima).
- Often works for interval scheduling, coin change (with canonical coins), activity selection, etc.

Example:

```go
// Greedy: Find minimum number of coins for amount (canonical coins)
coins := []int{25, 10, 5, 1}
amount := 63
count := 0
for _, coin := range coins {
    for amount >= coin {
        amount -= coin
        count++
    }
}
fmt.Println(count) // Output: 6 (2x25 + 1x10 + 3x1)
```

---

# Sliding Window

* Use a **window** (contiguous subarray/substring) that slides over the input.
* Efficient for problems involving **subarrays, substrings, or sequences**.

How it works:
- Start with a window (e.g., left and right pointers).
- Expand or shrink the window to maintain a property (sum, unique elements, etc.).
- Move the window efficiently without reprocessing the whole subarray each time.

Example:

```go
// Sliding Window: Longest substring with at most K distinct characters
s := "eceba"
k := 2
left, maxLen := 0, 0
count := map[byte]int{}
for right := 0; right < len(s); right++ {
    count[s[right]]++
    for len(count) > k {
        count[s[left]]--
        if count[s[left]] == 0 {
            delete(count, s[left])
        }
        left++
    }
    if right-left+1 > maxLen {
        maxLen = right - left + 1
    }
}
fmt.Println(maxLen) // Output: 3 ("ece")
```
