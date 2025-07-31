---
title: "Copilot GPT-4.1"
description: "Greedy algorithms explanation focusing on locally optimal choices and key characteristics"
---

# Greedy

* **Greedy** means: At each step, make the choice that looks best **right now**.
* You never reconsider your decisions—no backtracking.
* Works when **local optimum = global optimum** (the problem has the "greedy property").

Example:

* **Coin Change (min coins):** Always pick the largest coin you can.
* **Activity Selection:** Always pick the next activity that ends earliest.

**How to recognize greedy problems:**
* Problem asks for an **optimal** answer (min/max/smallest/largest)
* You can make a choice and never have to change it later

**Typical greedy pattern:**

1. Sort or prioritize items (by value, end time, etc.)
2. Iterate, always picking the best available option
3. Never look back or undo choices

---

# Sliding Window

* **Sliding window** is for problems involving **contiguous subarrays/substrings**.
* You maintain a "window" (range) over the array/string and move it to find the answer.

**When to use:**
* Find the longest/shortest subarray with some property
* Count subarrays with a sum, unique elements, etc.

**Two main types:**
1. **Fixed-size window:** Window size is constant (e.g., length k)
2. **Variable-size window:** Window expands/contracts to fit a condition

**Pattern:**

1. Start with window at the beginning
2. Expand (move right end) to include new elements
3. Shrink (move left end) to restore property if needed
4. Track the best answer as you go

Example (Longest substring with no repeats):

```
left = 0
for right in range(len(s)):
    while s[right] in window:
        remove s[left] from window
        left += 1
    add s[right] to window
    update best answer
```