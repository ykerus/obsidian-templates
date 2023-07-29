# 📖 Backlog

--- 

Tags: #collection
URI: `obsidian://open?vault=Obsidian&file=00.%20📓%20Log%2F📖%20Backlog`

---

## 👥 Open actions from meetings

```dataview
task
from #meeting 
where !completed 
and contains(string(section), "Actions")
group by join(split(split(path, "\.")[1], "/"), " / ")
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


