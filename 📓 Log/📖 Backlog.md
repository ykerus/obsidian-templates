# 📖 Backlog

--- 

Tags: #log

---

## 🗒 Open todos from daily notes

%%List uncompleted todos of yesterday or before's daily notes%%
```dataview
task
from #log 
where !completed 
and (date(split(split(string(section), "/")[length(split(string(section), "/"))-1], ",")[0]) < date(today))
and !contains(string(section), "Lessons")
group by split(split(string(section), ">")[1], "]")[0]
```
---

## 👥 Open actions from meetings

%%Prerquisite: meeting folder is called "👥 Meeting"%%
```dataview
task
from #meeting 
where !completed 
and contains(string(section), "Actions")
group by join(split(split(split(path, "👥 Meeting/")[1], ".md")[0], "/"), " / ")
```
---

## ⏱ Short term todos

%%Prerequisite: short term todos are in a note with a name containing "Short term"%%
```dataview
task
from #todo/ongoing
where !completed
and contains(path, "Short term")
group by split(split(string(section), ">")[1], "]")[0]
```
---

## ✨ Ongoing todos

%%List all onging todo notes%%
```dataview
list
from #todo/ongoing
```
--- 

## 🧩 Projects

%%List all projects/tasks tagged with # todo/todo or todo/doing%%

### 📚 Todo
```dataview
list
from #todo/todo
```

### ✍ Doing
```dataview
list
from #todo/doing
```



