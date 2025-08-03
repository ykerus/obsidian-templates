---
tags:
  - page
---


----
### `tag:meeting`
```dataview
TABLE file.size AS "Character Count"
FROM ""  
WHERE contains(file.tags, "#meeting")
AND !contains(file.tags, "#cleaned")
AND !contains(file.tags, "#archived")
SORT file.size asc
LIMIT 10
```

### `tag:scratch`
```dataview
TABLE file.size AS "Character Count"
FROM ""  
WHERE contains(file.tags, "#scratch")
AND !contains(file.tags, "#cleaned")
SORT file.size asc
LIMIT 10
```

### `tag:note`
```dataview
TABLE file.size AS "Character Count"
FROM ""
WHERE contains(file.tags, "#note")
AND !contains(file.tags, "#cleaned")
SORT file.size asc
LIMIT 10
```

### `tag:collection`
```dataview
TABLE file.size AS "Character Count"
FROM ""  
WHERE contains(file.tags, "#collection")
AND !contains(file.tags, "#cleaned")
SORT file.size asc
LIMIT 5
```
