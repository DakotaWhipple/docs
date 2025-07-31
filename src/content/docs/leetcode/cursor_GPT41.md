---
title: "Cursor GPT-4.1"
description: "Greedy algorithms guide covering locally optimal choices and key insights for problem solving"
---

# Greedy

* **Greedy algorithms** make the *locally optimal* choice at each step, hoping it leads to a global optimum.
* You never “reconsider” choices—once you pick, you move on.
* Works when the problem has the **greedy-choice property** (local optimum → global optimum).

Example:
*Pick the most money you can at each step:*

```go
// Coin Change (Greedy version, if coins are 1, 5, 10, 25)
func coinChange(coins []int, amount int) int {
    count := 0
    for i := len(coins) - 1; i >= 0; i-- {
        use := amount / coins[i]
        count += use
        amount -= use * coins[i]
    }
    if amount > 0 {
        return -1 // not possible
    }
    return count
}
```

* **Key:** Greedy only works if the problem structure allows it (e.g., U.S. coins, but not all coin sets).

---

# Sliding Window

* **Sliding window** is a technique for problems involving *contiguous subarrays or substrings*.
* You maintain a “window” (range) over the data and slide it to find the answer efficiently.
* Useful for: maximum/minimum sum, longest/shortest substring, etc.

Example:
*Find the length of the longest substring with no repeating characters:*

```go
func lengthOfLongestSubstring(s string) int {
    m := make(map[byte]int)
    left, res := 0, 0
    for right := 0; right < len(s); right++ {
        if idx, ok := m[s[right]]; ok && idx >= left {
            left = idx + 1
        }
        m[s[right]] = right
        if right-left+1 > res {
            res = right - left + 1
        }
    }
    return res
}
```

* **Key:**
  - Expand the window (move right pointer)
  - Shrink from the left as needed
  - Track the best result as you go
