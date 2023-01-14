# Make goals more concrete

---

Links: 
Tags: #goal
Date: 2023-01-14

---

## 📈 Progress

```dataviewjs
let s1 = "🎯"
let s2 = "🚩"
let s3 = "🎉"
let s4 = "timelines"

let not_completed = dv.current().file.tasks.where(
	t => !t.completed && !t.text.contains(s1) && !t.text.contains(s2) && !t.text.contains(s3) && !t.text.contains(s4)
).length
let completed = dv.current().file.tasks.where(
	t => t.completed && !t.text.contains(s1) && !t.text.contains(s2) && !t.text.contains(s3) && !t.text.contains(s4)
).length

dv.header(1, Math.round(completed / (completed + not_completed) * 100) + " %");
```


## 👉 Next action

```dataview
task
from #goal
where file.name = "Make goals more concrete"
and ( 
	(!completed and !contains(text, "🚩2") and !contains(text, "🎯2")) 
	or (completed and (contains(text, "🚩<") or contains(text, "🎯<")))
)
sort section ASC
limit 1
```


## 🎬 Starting point

- Vague goals in mind
- Not sure where to start


## 🎯 Target

*Clear, concise, measurable target to reach in order to complete this goal*
- [ ] Standardized framework created, customized to own liking, in which to document measurable goals that can be achieved by finishing tasks and reaching milestones along the way 🎯2023-01-14



## 🔁 Feedback

*Feedback from colleagues, friends, familiy or feedback from data*




## ✅ Tasks and milestones

- [x] Define timelines ⏳2023-01-10 🗓2023-01-12
- [x] Create Obsidian note for a goal ⏳2023-01-10 🗓2023-01-12
- [x] Include relevant components and requirements in the note  ⏳2023-01-10 🗓2023-01-12
- [ ] Goal note created 🚩2023-01-11

- [x] Refine timelines ⏳2023-01-12 🗓2023-01-14
- [x] Create template out of goal note ⏳2023-01-12 🗓2023-01-14
- [ ] Goal template created 🚩2023-01-14



## 🗓 Planner

*Scheduled tasks from goals for upcoming month*
```dataview
task
from #goal
where due >= date(today) and due < date(today) + dur(1 month)
and !completed
group by file.name
```


## ⬇️ Symbols

```Due
🗓
```
```Scheduled
⏳
```
```Milestone
🚩< *TODO: insert date* >
```
```Target
🎯< *TODO: insert date* >
```


## 🥳 Done

- [ ] You've reached your goal! 🎉 
