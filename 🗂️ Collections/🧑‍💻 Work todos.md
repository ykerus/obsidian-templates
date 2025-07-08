---
tags:
  - collection
links:
  - "[[🔜 Soon todos]]"
  - "[[🕰️ Later todos]]"
  - "[[🏡 Personal todos]]"
---
🧹 Unlabeled:
```dataview
TASK
FROM #collection
WHERE contains(file.name, "Work todos")
AND !contains(text, "[[20")
AND !contains(text, "Soon todos")
AND !contains(text, "Later todos")
AND !completed
AND !parent
```

----
