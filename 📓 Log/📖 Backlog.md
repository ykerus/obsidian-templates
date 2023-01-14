# 📖 Backlog

--- 

Tags: #log

---

## 👥 Open actions from meetings

```dataview
task
from #meeting 
where !completed 
and contains(string(section), "Actions")
group by join(split(split(split(path, "02. 👥 Meeting/")[1], ".md")[0], "/"), " / ")
```
---

## ⏱ Short term todos

```dataview
task
from #todo/ongoing
where !completed
and contains(path, "Short term")
group by split(split(string(section), ">")[1], "]")[0]
```
---

## ✨ Ongoing todos

```dataview
list
from #todo/ongoing
```
--- 

## 🧩 Projects

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

---

## 🚀 Goals

```dataviewjs

for (let path_ of dv.pagePaths("#goal").sort()) {
	let result = await dv.tryQuery("" +
	"task " +
	'where (path = "' + path_ + '") ' +
	"and ( " +
		'(!completed and !contains(text, "🚩2") and !contains(text, "🎯2")) ' +
		'or (completed and (contains(text, "🚩<") or contains(text, "🎯<"))) ' +
	") " +
	"sort section ASC " +
	"limit 1 "
	)
	dv.taskList(result.values)
}
```
