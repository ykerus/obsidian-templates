# 🏃 Meeting actions

---

Tags: #meeting #collection

---

```dataview
task
from #meeting 
where !completed 
and contains(string(section), "Actions")
group by join(split(split(path, "\.")[1], "/"), " / ")
```


