---
tags:
  - page
---
----

```button
name 🙋 Add person
type link
action obsidian://advanced-uri?vault=Obsidian&commandid=quickadd%253Achoice%253A570c1786-630c-48ee-8948-94d59f1bb215
customColor #F9E699
customTextColor #000000
```

```dataview
TABLE dateformat(birthday, "LLLL") AS Month, dateformat(birthday, "d LLLL yyyy") AS Birthday
FROM ""
WHERE birthday
SORT dateformat(birthday, "MM-dd")
```

No birthday found for:
```dataview
LIST
FROM #person
WHERE !birthday
```
