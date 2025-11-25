Thank you for contributing to this project!
Please follow this guide to ensure consistency, quality, and smooth collaboration across the team.

---

# **1. Project Workflow Overview**

This project uses **GitHub Flow + Dev Branch**:

```
main  → production-ready code only  
dev   → integration branch for new features  
feature/xyz → individual feature branches  
bugfix/xyz  → bug fixes  
hotfix/xyz  → urgent fixes to prod
```

* **main**: Never commit directly. Only merge PRs that have passed review & testing.
* **dev**: Default branch for PRs. All features merge here first.
* **feature/** & **bugfix/**: Used for development. Must be linked to an issue.

---

# **2. Setting Up Your Environment**

1. Fork the repo
2. Clone your fork
3. Create a branch from **dev**

Example:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/tin-application-form
```

---

# **3. Branch Naming Rules**

| Type          | Format Example                        | Description         |
| ------------- | ------------------------------------- | ------------------- |
| Feature       | `feature/tin-request-flow`            | New features        |
| Bug Fix       | `bugfix/officer-approval-not-loading` | Non-critical bugs   |
| Hotfix        | `hotfix/broken-auth-token`            | Critical prod fixes |
| Documentation | `docs/update-api-specs`               | Markdown edits      |

**Use lowercase + hyphens.**

---

# **4. Coding Standards**

### **General**

* Keep code modular and readable.
* Write clean and maintainable functions.
* Follow DRY, SOLID, and clean architecture principles.

### **Frontend**

* Use modern ES6+ practices.
* Componentize UI.
* Keep CSS organized.

### **Backend**

* Use controllers, services, repositories structure.
* Validate all incoming data.
* Handle errors with proper status codes.

### **Testing**

* Write tests for:

  * Core flows
  * Data validation
  * Security-sensitive code

---

# **5. Commit Message Guidelines**

Follow **Conventional Commits**:

```
feat: add officer approval workflow
fix: correct query not loading in admin dashboard
docs: update API usage section
refactor: reorganize validation utils
test: add tests for TIN application
chore: update dependencies
```

Rules:

* Present tense
* Short title (< 60 chars)
* Optional body explaining the change

---

# **6. Pull Request Guidelines (For Contributors)**

Before creating a PR:

✔️ Update your branch with latest `dev`
✔️ Ensure your code builds and tests pass
✔️ Add or update documentation if needed
✔️ Make sure no console logs or debug code
✔️ Follow commit standards

Create a PR:

1. Push branch:

```bash
git push -u origin feature/your-branch-name
```

2. Open a Pull Request **into `dev`**, NOT `main`.

3. PR Template Checklist:

   * What issue does this fix?
   * What feature does this add?
   * Screenshots or API samples (if applicable)
   * Steps to test the change
   * Any security-sensitivity considerations

4. Assign:

   * **Reviewer** (scrum master or senior dev)
   * **Labels** (feature, fix, hotfix, docs)

---

# **7. Responsibilities of the Reviewer (PR Acceptance Rules)**

The reviewer (usually the Scrum Master) must:

### **7.1 Code Quality Checks**

* Code style follows project standards
* No duplicated logic
* No hardcoded secrets
* Component/service structure is correct
* Naming and modularization are good

### **7.2 Security Checks**

* All API calls validated
* User input sanitized
* No exposed internal logic
* Authentication & authorization respected

### **7.3 Functional Checks**

* Does the feature work as intended?
* Does it break any other part of the system?
* Are edge cases handled?

### **7.4 Documentation Checks**

* New endpoints documented
* UI components explained (if needed)
* Comments added where logic is complex

### **7.5 Final Review Actions**

1. Approve, request changes, or reject
2. Ensure the branch is up-to-date with **dev**
3. Merge using **Squash and Merge** (standardize commit history)
4. NEVER merge directly into `main`
5. After merge, delete the branch

---

# **8. Dev Branch Management**

The **Scrum Master** is responsible for:

* Keeping `dev` stable
* Ensuring `dev` only contains reviewed PRs
* Coordinating weekly merges of **dev → main** after:

  * Testing
  * Security review
  * QA sign-off

### **Rules for Dev Branch**

* No direct commits
* All merges must be PR-based
* Always run tests on `dev` after merging
* Feature freeze before merging into `main`

---

# **9. Issue Tracking & Tickets**

Every task should have:

* Title
* Description
* Acceptance criteria
* Screenshots (if UI)
* Priority
* Assignee

Link all PRs to their issue using:

```
Closes #123
```

---

# **10. Communication Rules**

* Document all architectural decisions in `/docs/architecture/`
* Large changes require a Design Proposal
* Discuss blockers immediately in Telegram
* Use GitHub Discussions for long-form decisions

---

# **11. Security & Sensitive Data Rules**

**Do NOT commit:**

* API keys
* Server credentials
* Environment variables
* Citizen personal info in sample data

Use `.env.example` instead of `.env`.

---

# **12. Release Process (Dev → Main)**

1. Scrum Master freezes dev
2. CI tests run
3. Manually check the whole workflow
4. Scrum Master approves
5. Merge into **main**
6. Create a tagged release
