<%* if (1 == 0) { -%> #template <%* } -%>
<%*
    folder = "📋 Boards/"
    await tp.file.move(folder + tp.file.title)
-%>
---
kanban-plugin: board
tags:
  - board
---

## Backlog



## In progress



## Blocked



## On hold



## Done

**Complete**




%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false,false]}
```
%%