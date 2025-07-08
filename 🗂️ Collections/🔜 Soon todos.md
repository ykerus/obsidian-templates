---
tags:
  - collection
description: Tasks not associated with a day, to be done sooner than later
links:
  - "[[🕰️ Later todos]]"
---
## [[🏡 Personal todos]]

```button
name 🏡 Add
type link
action obsidian://advanced-uri?vault=Obsidian&commandid=quickadd%253Achoice%253A38fb56f2-752a-4c43-adab-b0d52754c759
customColor #cfeac0
customTextColor #000000
```

```dataview
TASK
FROM #collection
WHERE contains(file.name, "Personal todos")
AND contains(text, "Soon todos")
AND !completed
```

## [[🧑‍💻 Work todos]]

```button
name 🧑‍💻 Add
type link
action obsidian://advanced-uri?vault=Obsidian&commandid=quickadd%253Achoice%253A3a5435cd-aa92-4a24-ae33-f41e964b2f3f
customColor #ffe6ce
customTextColor #000000
```

```dataview
TASK
FROM #collection
WHERE contains(file.name, "Work todos")
AND contains(text, "Soon todos")
AND !completed
```

## 👥 Meeting actions

```dataview
TASK
FROM #meeting 
WHERE !completed
AND contains(string(section), "Actions")
GROUP BY join(split(path, "/"), " / ")
```

