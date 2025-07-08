---
tags:
  - collection
links:
  - "[[🔜 Soon todos]]"
  - "[[🕰️ Later todos]]"
  - "[[🧑‍💻 Work todos]]"
---
🧹 Unlabeled:
```dataview
TASK
FROM #collection
WHERE contains(file.name, "Personal todos")
AND !contains(text, "[[20")
AND !contains(text, "Soon todos")
AND !contains(text, "Later todos")
AND !completed
AND !parent
```

----

- [x] [[2025-08-02]] Something ✅ 2025-08-02