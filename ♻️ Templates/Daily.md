<%* if (1 == 0) { -%> #template <%* } -%>
<%*
	// Extract date from file name and compute offset in days w.r.t. today,
	// so we can compute the date of future or past daily notes w.r.t. this note.
	var today = new Date(tp.date.now("YYYY-MM-DD"));
	var file_date = new Date(tp.file.title.slice(0, 10));
	var offset_time = file_date.getTime() - today.getTime();
	var offset_days = offset_time / (1000 * 3600 * 24);

    var day = tp.date.now("dddd", offset_days);  // Full day name (e.g. Saturday)
    var week = tp.date.now("W", offset_days);  // Week nr
    var month = tp.date.now("MMMM", offset_days);

    var yesterday = tp.date.now("YYYY-MM-DD", offset_days - 1)
    var tomorrow = tp.date.now("YYYY-MM-DD", offset_days + 1)

    folder = "🗒️ Daily/" 
    await tp.file.move(folder + tp.file.title)
-%>
---
tags:
  - daily
date: <% tp.date.now("D MMMM YYYY", offset_days) %>
day: <% day %>
week: <% week %>
template: "[[Daily]]"
links:
  - "[[🔜 Soon todos]]"
  - "[[🕰️ Later todos]]"
  - "[[🎯 Board]]"
---
<< [[<% yesterday %>]] - [[<% tomorrow %>]] >>

```button
name 🗓️ <% tp.date.now("YYYY-MM-DD", offset_days) %>
type copy
action <% tp.date.now("YYYY-MM-DD", offset_days) %>
customColor #F3EEFE
customTextColor #000000
```

---
<%-* if (day != "Saturday" && day != "Sunday") {  // 🗓 %>
## 👥 Meetings

```button
name 👥 Add on date
type link
action obsidian://advanced-uri?vault=Obsidian&commandid=quickadd%253Achoice%253Af3d2967d-6b0d-482b-9cdf-78fbd35a35f7
customColor #ccddee
customTextColor #000000
```
```button
name 👥 Add for today
type link
action obsidian://advanced-uri?vault=Obsidian&commandid=quickadd%253Achoice%253A79fc4de7-627c-41f1-8919-8e06782ae310
customColor #ddeeff
customTextColor #000000
```

```dataview
list
from
#meeting
where contains(file.name, this.file.name)
```

## 🏃 Actions

```dataview
TASK
FROM #meeting 
WHERE !completed
AND contains(string(section), "Actions")
GROUP BY join(split(path, "/"), " / ")
```
---
<%-* } %>
<%-* if (day != "Saturday" && day != "Sunday") {  // 🗓 %>
## [[🧑‍💻 Work todos]]

```button
name 🧑‍💻 Add
type link
action obsidian://advanced-uri?vault=Obsidian&commandid=quickadd%253Achoice%253A3a5435cd-aa92-4a24-ae33-f41e964b2f3f
customColor #ffe6ce
customTextColor #000000
```

```dataview
TASK
FROM #collection
WHERE file.name = "🧑‍💻 Work todos"
AND startswith(text, "[[20")
AND (contains(text, this.file.name) OR (
    substring(text, 2, 12) < this.file.name
    and !completed
))
SORT completed, contains(text, "⏳"), contains(text, "‼️") DESC, contains(text, "❗️") DESC, line DESC
```

<%-* } %>
## [[🏡 Personal todos]]

```button
name 🏡 Add
type link
action obsidian://advanced-uri?vault=Obsidian&commandid=quickadd%253Achoice%253A38fb56f2-752a-4c43-adab-b0d52754c759
customColor #cfeac0
customTextColor #000000
```

```dataview
TASK
FROM #collection
WHERE file.name = "🏡 Personal todos"
AND startswith(text, "[[20")
AND (contains(text, this.file.name) OR (
    substring(text, 2, 12) < this.file.name
    and !completed
))
SORT completed, contains(text, "⏳"), contains(text, "‼️") DESC, contains(text, "❗️") DESC, line DESC
```
---
## 📝 Scratch notes

```button
name 📝 Add
type link
action obsidian://advanced-uri?vault=Obsidian&commandid=quickadd%253Achoice%253A43028160-1d32-43b0-ae50-b0c953453516
customColor #fcf0b5
customTextColor #000000
```

```dataview
LIST
FROM #scratch
WHERE contains(file.name, this.file.name)
OR contains(tags, "keep-in-daily")
```

## 📑 Info notes

```dataview
LIST
FROM #note
WHERE contains(file.name, this.file.name)
OR contains(tags, "keep-in-daily")
```
---
## [[🚩 Milestones]] 

```button
name 🚩 Add
type link
action obsidian://advanced-uri?vault=Obsidian&commandid=quickadd%253Achoice%253Aa0c209ea-9372-4561-aec9-70fe92220df3
customColor #ffdddd
customTextColor #000000
```

```dataview
list without id
L.text
from "🗂️ Collections/🚩 Milestones"
flatten file.lists as L
where contains(L.text, this.file.name)
```
---
## [[🎉 Birthdays]]

```button
name 🙋 Add person
type link
action obsidian://advanced-uri?vault=Obsidian&commandid=quickadd%253Achoice%253A570c1786-630c-48ee-8948-94d59f1bb215
customColor #F9E699
customTextColor #000000
```

```dataview
LIST 
FROM "" 
WHERE birthday
AND dateformat(birthday, "MM-dd") = substring(this.file.name, 5, 10)
```
---
## [[🌈 Lessons]]

```button
name 🌈 Add
type link
action obsidian://advanced-uri?vault=Obsidian&commandid=quickadd%253Achoice%253A6b871892-37b8-401d-bb4e-4e7f3426336f
customColor #FFFFFF
customTextColor #000000
```

```dataview
list without id
L.text
from "🗂️ Collections/🌈 Lessons"
flatten file.lists as L
where contains(
    substring(L.text, 6, 10), 
    substring(this.file.name, 4, 8)
)
```
