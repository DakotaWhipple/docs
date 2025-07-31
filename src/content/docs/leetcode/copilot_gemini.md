# Greedy

A greedy algorithm makes the **locally optimal choice** at each step with the hope of finding a **global optimum**.

* **Core Idea**: "What's the best move I can make *right now*?"
* It doesn't look ahead or reconsider past choices.

## When Does It Work?

Greedy works when the problem has the **Greedy Choice Property**:

> A global optimal solution can be arrived at by making a locally optimal choice.

Not all problems have this property. For example, making a locally optimal choice in a chess game (e.g., taking a pawn) might lead to a globally suboptimal outcome (e.g., getting checkmated).

## Example: Assign Cookies (LeetCode 455)

* **Problem**: You have children with greed factors `g` and cookies of sizes `s`. You can give a cookie `j` to a child `i` if `s[j] >= g[i]`. Maximize the number of content children.
* **Greedy Strategy**:
    1. Sort both the greed factors and the cookie sizes.
    2. Give the smallest cookie to the least greedy child who can eat it.
    3. Move to the next child and the next cookie.

This works because a small cookie is best used on a less greedy child. Saving it for a greedier child is a waste, as it might not be big enough.

```go
func findContentChildren(g []int, s []int) int {
    sort.Ints(g)
    sort.Ints(s)
    child, cookie := 0, 0
    for child < len(g) && cookie < len(s) {
        if s[cookie] >= g[child] {
            child++ // child is content
        }
        cookie++ // move to next cookie regardless
    }
    return child
}
```

---

# Sliding Window

A sliding window is a technique for problems that involve **contiguous subarrays or substrings**.

* **Core Idea**: Maintain a "window" (a sub-portion of the data) and slide it through the data.
* The window can **grow** (by moving the right pointer) or **shrink** (by moving the left pointer).

## When to Use It?

Look for problems asking for:

* Longest/shortest substring/subarray
* A specific property within a contiguous block of elements (e.g., max sum, count of distinct characters).

## Example: Max Erasure Value (LeetCode 1695)

* **Problem**: Find the maximum sum of a contiguous subarray with **unique elements**.
* **Sliding Window Strategy**:
    1. Use a `right` pointer to expand the window, adding the new element's value to a running `currentSum`.
    2. Use a `map` or `set` to track elements currently in the window.
    3. If you encounter a duplicate element, shrink the window from the `left` until the duplicate is removed. As you shrink, subtract the `left` element's value from `currentSum`.
    4. After each expansion, update the `maxSum`.

```go
func maximumErasureValue(nums []int) int {
    seen := make(map[int]int)
    left, maxSum, currentSum := 0, 0, 0

    for right, val := range nums {
        if lastSeenIndex, ok := seen[val]; ok && lastSeenIndex >= left {
            // Shrink window from the left
            for left <= lastSeenIndex {
                currentSum -= nums[left]
                left++
            }
        }
        // Expand window to the right
        seen[val] = right
        currentSum += val
        if currentSum > maxSum {
            maxSum = currentSum
        }
    }
    return maxSum
}
```
