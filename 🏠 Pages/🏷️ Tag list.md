---
tags:
  - page
description: Helps you keep your files tagged.
---
----

```dataview
TABLE length(file.tags) AS "Tag Count", file.tags as "Tags"
FROM "" 
WHERE !regexmatch("^\d{4}-\d{2}-\d{2}$", file.name)
AND !contains(file.tags, "#template") 
AND !contains(file.tags, "#collection")
AND !contains(file.tags, "#excalidraw")
AND !contains(file.tags, "#copilot")
AND !(file.name = "🎯 Board")
SORT length(file.tags) asc
```
