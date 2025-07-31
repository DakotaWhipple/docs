---
title: "Cursor Claude"
description: "Greedy algorithms guide covering locally optimal choices and key insights for problem solving"
---

# Greedy Algorithm

* You make the **locally optimal choice** at each step.
* You never reconsider past decisions.
* The key insight: **local optimum leads to global optimum** (when it works).

Example strategy:
* "Always pick the largest available item"
* "Always pick the earliest deadline"
* "Always pick the smallest cost"

```go
// Greedy: always pick the best choice right now
func greedy(items []Item) {
    for i := 0; i < len(items); i++ {
        best := findBestChoice(items[i:])  // local optimum
        take(best)                         // commit to it
        // never look back!
    }
}
```

## 🎯 When Does Greedy Work?

Greedy works when the problem has **optimal substructure** + **greedy choice property**:

* **Optimal substructure**: optimal solution contains optimal solutions to subproblems
* **Greedy choice property**: locally optimal choice leads to globally optimal solution

Common greedy patterns:
* **Interval scheduling**: sort by end time, pick earliest ending
* **Activity selection**: pick the activity that ends first
* **Huffman coding**: merge two lowest frequency nodes
* **Fractional knapsack**: sort by value/weight ratio

## 🧠 Analogy: The Impatient Shopper

Imagine you're shopping with limited time:

* You walk through the store **once**
* At each item, you decide: "Is this the best I can get **right now**?"
* If yes → take it and move on
* If no → skip it and **never come back**

You can't go back and reconsider because you're **greedy for immediate gains**.

---

# Sliding Window

* You maintain a **window** (subarray) that **slides** across the array.
* The window **expands** and **contracts** based on some condition.
* Perfect for **subarray/substring problems** with constraints.

Two main types:
* **Fixed size window**: window size stays constant
* **Variable size window**: window grows/shrinks dynamically

```go
// Variable sliding window template
func slidingWindow(nums []int) int {
    left, right := 0, 0
    
    for right < len(nums) {
        // Expand: add nums[right] to window
        addToWindow(nums[right])
        
        // Contract: shrink window if condition violated
        for windowInvalid() {
            removeFromWindow(nums[left])
            left++
        }
        
        // Update result with current valid window
        updateResult(right - left + 1)
        right++
    }
    
    return result
}
```

## 🎯 Common Sliding Window Patterns

**Pattern 1: Maximum window size**
* "Longest substring with at most K distinct characters"
* Expand until invalid, then contract until valid

**Pattern 2: Minimum window size**  
* "Minimum window substring containing all characters"
* Expand until valid, then contract while maintaining validity

**Pattern 3: Fixed window**
* "Maximum sum of subarray of size K"
* Slide window of constant size

## 🔄 The Two-Pointer Dance

Think of sliding window as **two pointers dancing**:

```
[1, 2, 3, 4, 5, 6]
 ↑           ↑
left       right

Step 1: right moves → window grows
[1, 2, 3, 4, 5, 6]
 ↑              ↑
left          right

Step 2: condition violated → left catches up
[1, 2, 3, 4, 5, 6]
    ↑           ↑
   left       right
```

## 🧠 Analogy: The Adjustable Spotlight

Imagine you have a **spotlight** shining on an array:

* The spotlight can **expand** (include more elements)
* The spotlight can **contract** (exclude elements from the left)
* You're looking for the **best spotlight position** that satisfies your condition
* Instead of checking **every possible position**, you **slide smoothly** from left to right

The spotlight never jumps around randomly - it moves **systematically** to explore all possibilities efficiently.

