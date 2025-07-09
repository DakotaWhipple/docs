---
title: Codex of Driven Dev
slug: docs/codex-of-driven-dev
---

# 🧱 Architecture-Driven Development

**What it is:**  
You model out the high-level structure (components, systems, contracts) before coding or documenting.

**Why it's better:**  
Prevents you from overfitting your code to a narrow use case.

**How to apply:**  
Use tools like C4 model diagrams, Mermaid.js, or even block diagrams to define shape and boundaries before diving in.

> “README says what it is. Architecture says why it’s shaped that way.”

---

# 🧪 Test-Driven Development (TDD) or Example-Driven Design

**What it is:**  
You define exact input/output or behavior up front (with or without tests).

**Why it’s better:**  
It anchors your work in actual usage and edge cases.

**Alternative if you hate writing tests:**  
Just write a few concrete usage examples as `.md`, `.sh`, or CLI commands.

> “If I can’t write an example, I don’t understand the problem.”

---

# 🪞 Narrative-Driven Development

**What it is:**  
You write a user story, CLI session, or debug log as if it already happened.

**Why it's better:**  
Clarifies the actual journey users/devs take.

**How it helps:**  
Great for CLI tools, APIs, dev workflows, etc.

**Example:**  
> I wanted to clean up my stale branches, so I ran `git janitor --purge-stale` and it...

This approach simulates the user experience first, which helps uncover the design.

---

# 🔁 Feedback-Driven Development

**What it is:**  
You use tight loops—prototypes, runbooks, and logs to refine what the code should do.

**Why it's better:**  
Reality is a better teacher than assumptions.

**How to apply:**  
Script stuff, watch it break, then document your findings.

Your doc becomes a living "this is what actually happened" story—not just a “what it should do” manifesto.

---

# 🧠 Concept-Driven Development

**What it is:**  
You identify the core concepts (not features) and build around them.

**Why it's better:**  
Leads to composable, general-purpose, elegant systems.

**How to apply:**  
Think in terms of nouns & verbs first: resource, action, intent, state.

This is how Unix tools, React hooks, and functional libraries are born.

---

# 📘 README-Driven Development (RDD)

**What it is:**  
You write the `README.md` before writing any code.

**Why it's good:**  
Forces you to define the purpose, usage, and API before implementation. This helps clarify your intent and prevent unnecessary complexity.

**How to apply:**

- Describe the project in plain language.
- Define installation steps.
- Add usage examples (CLI commands, function calls, etc).
- Outline configuration, expected outputs, or integration details.

> “If I can’t explain it in the README, I’m not ready to code it.”

---

# 🔥 Best Hybrid Flow (for learning + building)

1. ✍️ **Draft a README**
2. 🎨 **Sketch an architecture or diagram**
3. 🧪 **Write example use cases or terminal transcripts**
4. ⚙️ **Automate or script something small**
5. 📝 **Document what broke and how you fixed it**
6. 🔁 **Refine the README with real feedback**

This way you're not just writing speculative docs—you’re curating living knowledge through exploration.