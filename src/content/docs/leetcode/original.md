---
title: "DFS and Include/Exclude Patterns"
description: "Understanding depth-first search strategy and include/exclude decision patterns for recursive problem solving"
---

# Depth-First Search

* You go **deep along one path** before exploring alternatives.
* In recursion, this means:

  * You make a decision
  * Recurse
  * When the recursion returns, you go back and try the other option

It’s a **search *strategy***: how do you explore possibilities?

Example:

```go
// DFS exploring a tree
func dfs(node *TreeNode) {
    if node == nil {
        return
    }
    dfs(node.Left)  // go deep
    dfs(node.Right)
}
```

---

# Include/Exclude

At each step:

* 🔹 You can **include** the current item → move forward with it
* 🔸 You can **exclude** the current item → move forward without it

So every element generates **2 branches**:

```
dfs(i, ...) branches into:
- dfs(i+1, include nums[i])
- dfs(i+1, exclude nums[i])
```

You’re building a **binary decision tree**
This creates a **binary tree of choices**, like:

```
              []
           /     \
        [1]       []
       /   \     /   \
    [1,2] [1]   [2]   []
```

---

## 🔗 How Do They Combine?

You **use DFS** to **explore** the full space of **include/exclude decisions**.

* So the **problem’s structure is include/exclude**
* And the **algorithm that explores that tree** is DFS

Every recursive call is like:

> “Go deeper with this decision (include or exclude), and come back after exploring it fully.”

That’s depth-first!

---

## 🧠 Analogy: Walking Through a Forest of Choices

Imagine you're walking through a decision forest:

* At each step, you can go left (include) or right (exclude)
* DFS says: "Pick one direction and go **all the way** to the end before turning back"
* Include/exclude says: "Here are your **two options** at every tree"

So you walk the full path:

```
Start → include 1 → include 2 → include 3 → leaf → backtrack
           ↓           ↓           ↓
        subset: [1,2,3]
```
