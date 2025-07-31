---
title: "Cursor Claude Thinking"
description: "Greedy algorithms guide covering locally optimal choices and key insights for problem solving"
---

# Greedy Algorithm

* You make the **locally optimal choice** at each step
* You **never look back** or reconsider previous decisions
* Hope that local choices lead to a global optimum

Key insight: **"Take what looks best right now"**

## 🎯 When Does Greedy Work?

Greedy works when the problem has the **greedy choice property**:
* Making the locally optimal choice leads to a globally optimal solution
* You can prove that choosing greedily at each step doesn't prevent finding the optimal solution

Example problems:
* **Fractional Knapsack**: Take items with highest value/weight ratio first
* **Activity Selection**: Choose activities that end earliest
* **Huffman Coding**: Build tree by always combining two smallest frequencies

## 🔍 Template Pattern

```go
func greedy(items []Item) Result {
    // 1. Sort items by greedy criterion
    sort.Slice(items, func(i, j int) bool {
        return items[i].greedyCriterion() < items[j].greedyCriterion()
    })
    
    result := Result{}
    
    // 2. Iterate and make greedy choices
    for _, item := range items {
        if canTake(item, result) {
            result.add(item)  // Take it greedily
        }
    }
    
    return result
}
```

## 🧠 Analogy: Hungry at a Buffet

Imagine you're at a buffet with limited stomach space:

* **Greedy**: Always pick the most delicious-looking food right in front of you
* **No backtracking**: Once you put food on your plate, you can't put it back
* **Hope**: That choosing the best available option each time fills you optimally

Sometimes this works great (when all good food is at the front), sometimes not (when the best food is at the back)!

---

# Sliding Window

* You maintain a **window** (subarray) that **slides** across the array
* The window **expands** and **contracts** as needed
* Perfect for **contiguous subarray** problems

Key insight: **"Don't recompute everything from scratch"**

## 🪟 Two Types of Windows

### Fixed Size Window
Window size stays constant, just slides over:

```go
func fixedWindow(nums []int, k int) []int {
    result := []int{}
    
    for i := 0; i <= len(nums)-k; i++ {
        // Process window nums[i:i+k]
        windowSum := 0
        for j := i; j < i+k; j++ {
            windowSum += nums[j]
        }
        result = append(result, windowSum)
    }
    
    return result
}
```

### Variable Size Window
Window size changes based on conditions:

```go
func variableWindow(nums []int, target int) int {
    left := 0
    currentSum := 0
    maxLength := 0
    
    for right := 0; right < len(nums); right++ {
        currentSum += nums[right]  // Expand window
        
        // Contract window while condition violated
        for currentSum > target {
            currentSum -= nums[left]
            left++
        }
        
        // Update result
        maxLength = max(maxLength, right-left+1)
    }
    
    return maxLength
}
```

## 🎯 Common Patterns

### Expand-Contract Pattern
```go
left := 0
for right := 0; right < len(array); right++ {
    // 1. Expand: add array[right] to window
    addToWindow(array[right])
    
    // 2. Contract: shrink from left while invalid
    for !isValid() {
        removeFromWindow(array[left])
        left++
    }
    
    // 3. Update result with current valid window
    updateResult(right - left + 1)
}
```

## 🧠 Analogy: Looking Through a Train Window

Imagine you're on a train looking for houses:

* **Fixed window**: You have a fixed-size window and the train moves at constant speed
* **Variable window**: You can make the window bigger/smaller based on what you see
* **No re-checking**: Once the train passes a house, you don't look back
* **Efficient**: You see each house exactly once, not repeatedly

Perfect for: "Find the longest/shortest/best contiguous something"

## 🎪 When to Use Each Technique?

| Problem Type | Best Approach | Why? |
|-------------|---------------|------|
| "Best contiguous subarray" | Sliding Window | Avoids recomputation |
| "Optimal selection from choices" | Greedy | Local choices → global optimum |
| "All possible combinations" | DFS + Include/Exclude | Need to explore all paths |
| "Tree/graph traversal" | DFS | Natural recursive structure |
