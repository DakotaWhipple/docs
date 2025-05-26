---
title: Backend Starter
---

If I’m hiring a backend developer and I want them to be **immediately productive**, there are a few **non-CS fundamentals** I would **require expertise in**, depending on the maturity and scale of the system. Here are the **most impactful backend-specific domains** that I’d lean heavily on:

---

### 🚨 Must-Have Domain Expertise (Beyond CS Basics)

#### 1. **Data Modeling + Query Optimization (SQL)**

* Not just CRUD.
* Must be able to:

  * Design normalized + denormalized schemas based on use case.
  * Understand query plans and indexes.
  * Optimize slow queries.
* **Why**: Backend work is often bottlenecked by bad data access patterns more than bad code.

#### 2. **API Design + Versioning Principles**

* Knows REST vs GraphQL tradeoffs.
* Understands:

  * Contract stability.
  * Pagination, filtering, error handling.
  * Breaking vs non-breaking changes.
* **Why**: Poor API design causes years of tech debt and pain.

#### 3. **Authentication + Authorization (OAuth2/OIDC/Role-based access control)**

* Knows how token-based systems work (JWT vs opaque).
* Can implement scopes, roles, tenants, etc.
* **Why**: Backend devs deal with access control daily, and mistakes here lead to security breaches.

#### 4. **Observability / Debuggability**

* Fluent in logs, traces, and metrics.
* Can instrument code with structured logs.
* **Why**: Debugging distributed systems is brutal without this. It’s where junior devs waste the most time.

#### 5. **Job Queues / Async Processing**

* Knows when to offload to background jobs.
* Has experience with queues (e.g., RabbitMQ, Kafka, SQS) and workers.
* **Why**: Backends need to scale beyond just HTTP request lifecycles.

---

### 👑 Bonus That Makes Them Senior Fast

#### - **Caching Strategies**

* Knows what to cache (and what not to).
* Can use Redis, CDNs, in-memory caches wisely.
* Understands invalidation techniques.

#### - **Distributed Systems Fundamentals**

* Knows CAP theorem, consistency models.
* Familiar with leader election, retries, idempotency, etc.
* Especially if the system spans multiple services or regions.

#### - **Containerization + Deployment (Docker/K8s)**

* Can write a clean Dockerfile and debug container failures.
* Doesn’t need to be infra-heavy, but must understand how their app runs in prod.

---

Summary: If I had to pick **one**, I'd require **data modeling + query optimization**. It has the highest ROI for backend dev productivity, especially in systems that touch any non-trivial data.
