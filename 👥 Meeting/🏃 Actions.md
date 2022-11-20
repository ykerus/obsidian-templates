# 🏃 Actions

---

Tags: #meeting

---

```dataview
task
from #meeting 
where !completed 
and contains(string(section), "Actions")
group by join(split(split(split(path, "👥 Meeting/")[1], ".md")[0], "/"), " / ")
```


