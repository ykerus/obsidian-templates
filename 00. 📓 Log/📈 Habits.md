# 📈 Habits

---

Tags: #collection #development
Links: [[📈 Habits.config]]

---

```dataviewjs
const { Config } = customJS
const { DailyNotes } = customJS
const { HabitTracker } = customJS

const config = await Config.readConfig(dv, "#config/habits")

DailyNotes.getNotes(dv, '#log')

HabitTracker.init(config.habitsConfig)
HabitTracker.getStats(DailyNotes)
HabitTracker.createTable(dv, config.tableConfig)
```

