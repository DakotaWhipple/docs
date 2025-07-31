---
title: "Claude Code"
description: "Greedy algorithms guide covering locally optimal choices and key insights for problem solving"
---

# Greedy Algorithms

* Make the **locally optimal choice** at each step
* Hope it leads to a **globally optimal solution**
* **Never reconsider** previous decisions - no backtracking

## 🎯 Key Insight

At each step, pick what looks best **right now**, without worrying about future consequences.

## 🔄 Pattern

```go
func greedy(items []Item) Solution {
    sort.Slice(items, compareFunction) // Often need to sort first
    
    solution := Solution{}
    for _, item := range items {
        if canInclude(item, solution) {
            solution = include(item, solution) // Greedy choice
        }
    }
    return solution
}
```

## 📝 When Does Greedy Work?

1. **Greedy Choice Property**: Local optimum leads to global optimum
2. **Optimal Substructure**: Problem can be broken into subproblems

## 🌟 Classic Examples

* **Interval Scheduling**: Pick meetings that end earliest
* **Fractional Knapsack**: Pick items with highest value/weight ratio
* **Huffman Coding**: Build tree by merging smallest frequencies

---

# Sliding Window

* Maintain a **window** (subarray/substring) that slides across the data
* **Expand** window by moving right pointer
* **Shrink** window by moving left pointer
* Track window state efficiently

## 🎯 Key Insight

Instead of checking every possible subarray (O(n²)), slide a window and update incrementally (O(n)).

## 🔄 Pattern

### Fixed Size Window
```go
func fixedWindow(arr []int, k int) []int {
    result := []int{}
    windowSum := 0
    
    // Initialize first window
    for i := 0; i < k; i++ {
        windowSum += arr[i]
    }
    result = append(result, windowSum)
    
    // Slide window
    for i := k; i < len(arr); i++ {
        windowSum += arr[i] - arr[i-k] // Add new, remove old
        result = append(result, windowSum)
    }
    return result
}
```

### Variable Size Window
```go
func variableWindow(arr []int, target int) int {
    left := 0
    windowSum := 0
    result := 0
    
    for right := 0; right < len(arr); right++ {
        windowSum += arr[right] // Expand window
        
        // Shrink window while condition is violated
        for windowSum > target {
            windowSum -= arr[left]
            left++
        }
        
        // Update result with current window
        result = max(result, right - left + 1)
    }
    return result
}
```

## 🌟 Common Use Cases

* **Fixed Size**: Moving average, max in sliding window
* **Variable Size**: Longest substring with condition, minimum window substring
* **Two Pointers**: Find pair with target sum

## 💡 Window State Tracking

* **Sum**: Track running total
* **Count**: Use map/array for character frequencies  
* **Min/Max**: Use deque for efficient min/max queries
