# Obsidian templates

---

## 👋 Introduction

This repository contains an obsidian vault with templates and structures that may be useful if you struggle keeping your todos, meetings, actions, projects, etc. organised. With these templates, you can start each day with a fresh note in which you can organise and log your day. These notes are templated using Obsidian's community plugin `templater`. Forgotten todos (among other things) are queried using Obsidian's comunity plugin `dataview`, and collected in a central note, so nothing gets lost.

## 🚀 Getting started

1. Install [Obsidian](https://obsidian.md/)
2. Download this repository
3. Open this repository as vault in Obsidian
4. Create daily notes, meeting notes, projects, todos, etc.

When you open this README in Obsidian, the file and image references in following sections will render nicely.

> ⚠️ Only if you use this repo as your vault, your keyboard shortcuts will be the same as used in the following sections. If you incorporated the templates in this repository in your own existing vault, you might have to configure these shortcuts yourself.

## 📓 Organise your days with daily notes

### 📝 Create daily notes

Use the shortcut  `⌘ + D` to open today's daily note. If it doesn't exist, it will automatically create a note for you under "📓 Log/🗒 Daily/"  using the template "`_`♻️ Templates/0. 📓 Daily.md":

![[Pasted image 20221127160935.png]]

Check out the [[0. 📓 Daily|daily note template]] to learn how the different sections are defined and how they can be used.

### ↔ Navigate between daily notes

There are several ways to navigate between daily notes:

- Use shortcuts `⌘ + SHIFT + D` to go to the next existing daily note and `⌘ + SHIFT + A` to go to the previous existing daily note. This only works if the notes already exist.
- Use the links that are automatically included in the daily note. E.g. clicking the link `Tomorrow`, will either open tomorrow's daily note if it exists, or create an empty file with the right title for tomorrow's note.  In the latter case, insert the daily note template by using the shortcut `⌘ + T`  and selecting the Daily note template: ![[Pasted image 20221127162631.png]] This will insert the template, and move the file to `📓 Log/🗒 Daily/`.
- Of course you can also just open or create files using the left sidebar.

### ◻️ Not losing any task

You probably don't want to list all your todos in a single daily note and move them everyday to the next one. For this reason, the daily note template includes links to a [[📖 Backlog]] note, a [[_⏱ Short term|⏱ Short term]] and a [[_📆 Long term|📆 Long term]] todos note.

The [[📖 Backlog]] note is used to collect all open todos from several other notes, such as as uncompleted todos or actions from daily notes or meetings. This note should help you keep track of your tasks, and prevent losing any important open todos. It also helps you rember the projects you were working on or the goals that you are trying to achieve.

The [[_⏱ Short term|⏱ Short term]] todos note is used to list all short term todos, which aren't yet included in any daily note. The todos in this note are also queried in the backlog note. Similar to the short term todos note, a [[_📆 Long term|📆 Long term]]  todos note is included in this repository for less time-critical todos.

### ⏱ Query time-critical todos

Any todo, anywhere in the vault, may be supported by a date indicator. These help us query the todos and present them in a daily note when needed. There are two indicators supported in the current templates: a due date, and a scheduled date.

#### 🗓 Todo due date

If you want a todo to get done by a date `<YYYY-MM-DD>` the latest , add `🗓<YYYY-MM-DD>` to the body of the todo. E.g.:

- [ ] Do something 🗓2022-12-15

These kind of todos appear both on the day itself and the day before the due date in your daily note under "Due". If the due date has passed, this todo will appear under "Late".

#### ⏳ Todo scheduled date

If you want to be reminded earlier of a todo than a day before the due date, use `⏳<YYYY-MM-DD>` to schedule the todo for `<YYYY-MM-DD>`. From that day onwards, this todo will appear under "Due" in your daily notes. E.g.:

- [ ] Do something ⏳2022-12-01 🗓2022-12-15

### 🌈 Track your daily lessons

Every day you (should) learn something new. You can easily write these lessons down in your daily notes under "Lessons" so they can be queried in the [[🌈 Lessons]] note. Make sure the lessons are written down as todos, otherwise they cannot be queried.

### 🚩 Milestones

Milestones are an important part of tracking progress. Within your daily notes, you can create a milestone by adding a todo with 🚩`<YYYY-MM-DD>` in its text. E.g.:

- [ ] I made it this far in the readme! 🚩2023-01-16

> Tip: if you want to speed up writing dates, consider creating a keyboard shortcut to insert the current date. [This](https://discussions.apple.com/thread/8651300) helped me set it up.

### 🗃 Sort daily notes

Open a terminal in your vault and run `make structure` to sort all daily notes (up to today) into the 
right folders. For example, the note `2022-11-10, ...` will be placed into the folder 
"🗓 2022/November". `make structure` will execute `structure.py` under `.obsidian/scripts/`

Note that the script `structure.py` assumes all daily notes to be located under `📓 Log/🗒 Daily` 
and that the folders for each year get the prefix emoji `🗓`. If you want a different structure or naming, make sure to change that in both your notes/folders and in `structure.py`

## 👥 Meeting notes and actions

### 📝 Create meeting notes

You can quickly create a new meeting note following these steps:

1. Create an empty file using `⌘ + N`
2. Rename the file `<YYYY-MM-DD> <meeting title>` where `<YYYY-MM-DD>` is the date of the meeting
3. Insert the meeting template
![[Pasted image 20221127172151.png]]
4. Move the note to the desired folder under `👥 Meeting/`

### 🏃 Track your meeting actions

A meeting may lead to action points. These can be listed in a meeting note under "Actions". Make sure to list them down as todos, so they may be queried in the [[🏃 Actions]] note. This note ensures that open actions do not get lost in a pile of meeting notes, but instead can always be found in a single central note.

## 📄 Other templates

To add an ongoig todo note, use the template [[5. ⏱ Todo]]. For example, you may want to add a note called "✍️ Blogposts" in which you list ideas for blog posts you still want to write. This note is automatically tagged with `#todo/ongoing`.

To add a new project idea, use the template [[6. 🧩 Project]] .  Use the tags `#todo/todo`, `#todo/doing` and `#todo/done` to indicate the status of the project. These tags are used in the backlog note, to query the projects you might want to pick up.

Check out the other ones! "7. 🚀 Goal" is my last WIP
