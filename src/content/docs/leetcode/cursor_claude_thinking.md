---
title: "Cursor Claude Thinking"
description: "Greedy algorithms guide covering locally optimal choices and key insights for problem solving"
---

# Greedy Algorithms

A greedy algorithm makes the **locally optimal choice** at each step, hoping to find a **global optimum**.

* 🎯 **Key idea**: Make the best decision right now
* 🚫 **No looking back**: Once you make a choice, stick with it
* ⚡ **Usually efficient**: Often O(n) or O(n log n)

## When Does Greedy Work?

Greedy works when the problem has **optimal substructure** and the **greedy choice property**:

* **Optimal substructure**: Optimal solution contains optimal solutions to subproblems
* **Greedy choice property**: Local optimum leads to global optimum

## Common Greedy Patterns

### 1. **Interval Scheduling** (Activity Selection)
```go
// Sort by end time, pick non-overlapping intervals
sort.Slice(intervals, func(i, j int) bool {
    return intervals[i][1] < intervals[j][1] // sort by end time
})

count := 0
lastEnd := math.MinInt32
for _, interval := range intervals {
    if interval[0] >= lastEnd { // no overlap
        count++
        lastEnd = interval[1]
    }
}
```

### 2. **Fractional Knapsack** 
```go
// Sort by value/weight ratio, take highest ratio first
type Item struct { value, weight int }
sort.Slice(items, func(i, j int) bool {
    ratioI := float64(items[i].value) / float64(items[i].weight)
    ratioJ := float64(items[j].value) / float64(items[j].weight)
    return ratioI > ratioJ
})
```

### 3. **Huffman Coding** (Min-Heap)
```go
// Always merge the two smallest frequencies
for heap.Len() > 1 {
    left := heap.Pop()
    right := heap.Pop()
    merged := &Node{freq: left.freq + right.freq, left: left, right: right}
    heap.Push(merged)
}
```

## 🧠 Analogy: The Hungry Person

Imagine you're really hungry at a buffet:

* **Greedy approach**: "I'll take the most delicious-looking item right now"
* **No planning**: You don't think about the entire meal
* **Sometimes works**: If you have good taste, you end up with a great meal
* **Sometimes fails**: You fill up on appetizers and miss the amazing dessert

---

# Sliding Window

A **two-pointer technique** where you maintain a "window" that slides over an array/string.

* 🪟 **Window**: A contiguous subarray/substring
* ↔️ **Two pointers**: `left` and `right` define the window boundaries
* 🎯 **Goal**: Find optimal window that satisfies some condition

## Two Main Types

### 1. **Fixed Size Window**
Window size stays constant, slide one position at a time.

```go
func fixedWindow(arr []int, k int) []int {
    result := []int{}
    windowSum := 0
    
    // Build initial window
    for i := 0; i < k; i++ {
        windowSum += arr[i]
    }
    result = append(result, windowSum)
    
    // Slide the window
    for i := k; i < len(arr); i++ {
        windowSum = windowSum - arr[i-k] + arr[i] // slide
        result = append(result, windowSum)
    }
    return result
}
```

### 2. **Variable Size Window**
Window grows/shrinks based on condition. Two sub-patterns:

#### **Pattern A: Find Maximum Window**
```go
func maxWindow(s string) int {
    left := 0
    maxLen := 0
    
    for right := 0; right < len(s); right++ {
        // Add s[right] to window
        addToWindow(s[right])
        
        // Shrink from left while condition is violated
        for !isValid() {
            removeFromWindow(s[left])
            left++
        }
        
        // Update answer with current valid window
        maxLen = max(maxLen, right - left + 1)
    }
    return maxLen
}
```

#### **Pattern B: Find Minimum Window**
```go
func minWindow(s string) int {
    left := 0
    minLen := math.MaxInt32
    
    for right := 0; right < len(s); right++ {
        // Add s[right] to window
        addToWindow(s[right])
        
        // Shrink from left while condition is satisfied
        for isValid() {
            minLen = min(minLen, right - left + 1)
            removeFromWindow(s[left])
            left++
        }
    }
    return minLen
}
```

## Common Sliding Window Problems

* **Subarray sum equals K**
* **Longest substring without repeating characters**
* **Minimum window substring**
* **Maximum sum subarray of size K**
* **Find all anagrams in a string**

## 🧠 Analogy: Looking Through a Moving Window

Imagine you're on a train looking through a window:

* **Fixed window**: Window size never changes, but the view slides by
* **Variable window**: You can make the window bigger or smaller
* **Expand**: See more of the landscape (grow window right)
* **Contract**: Focus on specific details (shrink window from left)
* **Goal**: Find the best view that meets your criteria

## 🔑 Key Insight

Sliding window **avoids recalculating** from scratch:
* Instead of checking every possible subarray (O(n³))
* We **slide** and **maintain** the window state (O(n))
* **Add one element**, **remove one element** = O(1) per step

