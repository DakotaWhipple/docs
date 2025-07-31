---
title: "Copilot Gemini"
description: "Greedy algorithms introduction covering locally optimal choices and greedy choice property"
---

# Greedy

A greedy algorithm builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit. It's about making the locally optimal choice at each stage with the hope of finding a global optimum.

## Key Characteristics

*   **Local Optimality**: At each step, you make the best choice available at that moment.
*   **No Backtracking**: Once a choice is made, it's never reconsidered.
*   **Hope for Global Optimum**: The assumption is that a series of locally optimal moves will lead to a globally optimal solution. This doesn't always work, but it does for a specific class of problems.

## When to Use It

Greedy algorithms are suitable for problems with the **greedy choice property** and **optimal substructure**.

1.  **Greedy Choice Property**: A global optimal solution can be arrived at by making a locally optimal choice.
2.  **Optimal Substructure**: An optimal solution to the problem contains optimal solutions to its subproblems.

## Example: Coin Change

Imagine you need to give change for a certain amount using the fewest possible coins (e.g., quarters, dimes, nickels, pennies).

The greedy approach is:
1.  Start with the largest coin (quarter).
2.  Use as many of them as you can without exceeding the amount.
3.  Move to the next largest coin (dime) and repeat.
4.  Continue until the amount is zero.

For standard US currency, this works perfectly.

```go
func makeChange(amount int) []int {
    coins := []int{25, 10, 5, 1}
    change := []int{}
    for _, coin := range coins {
        for amount >= coin {
            change = append(change, coin)
            amount -= coin
        }
    }
    return change
}
```

---

# Sliding Window

The sliding window technique is used for problems that involve finding a subarray or substring in an array or string that satisfies a certain condition. It involves maintaining a "window" (a sub-range) that slides over the data.

## Core Idea

Instead of re-computing values for every possible subarray, you slide a window over the data and efficiently update the result. The window can be of a fixed or variable size.

*   **Expand**: Grow the window by moving the right pointer.
*   **Shrink**: Shrink the window by moving the left pointer.

This turns a potential O(n²) problem into an O(n) solution.

## When to Use It

Look for problems that ask for something like:
*   Longest/shortest/best subarray/substring.
*   A contiguous sequence that meets a certain criteria.
*   Problems involving arrays, strings, or lists where you need to check contiguous blocks.

## Example: Maximum Sum Subarray of Size K

Given an array of integers, find the maximum sum of any contiguous subarray of size `k`.

1.  **Initialize**: Calculate the sum of the first `k` elements. This is your initial window.
2.  **Slide**:
    *   Move the window one step to the right.
    *   **Subtract** the element that is no longer in the window (the leftmost one).
    *   **Add** the new element that just entered the window (the rightmost one).
    .  Update the maximum sum.

```go
func maxSumSubarray(nums []int, k int) int {
    if len(nums) < k {
        return 0
    }

    // Initial window sum
    windowSum := 0
    for i := 0; i < k; i++ {
        windowSum += nums[i]
    }

    maxSum := windowSum

    // Slide the window
    for i := k; i < len(nums); i++ {
        windowSum += nums[i] - nums[i-k] // Add new, subtract old
        if windowSum > maxSum {
            maxSum = windowSum
        }
    }

    return maxSum
}
```