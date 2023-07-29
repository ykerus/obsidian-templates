# 🚩 Milestones

---

Tags: #collection

---

```dataview
task
from #log
where contains(string(text), "🚩")
sort file.name DESC
group by split(split(string(section), ">")[1], "]")[0]
```

## 🚀 Goals

```dataview
task
from #goal
where contains(string(text), "🚩2")
group by file.name
```


