# Obsidian templates

---

## 👋 Introduction

This repo forms the basis of my personal Obsidian vault. Hope you find it as useful as I do!

## 🚀 Getting started

1. Install [Obsidian](https://obsidian.md/)
2. Download this repository
3. Open this repository as vault in Obsidian
4. Create daily notes, meeting notes, projects, todos, etc.
5. Check out the rest of this README to learn some useful workflows

Tip: Do steps 1-3 already and open this README in Obsidian. Then the following sections will be rendered nicely.

> [!WARNING]  Only if you use this repo as your entire vault, your keyboard shortcuts and plugin configurations will be the same as used in the following sections. If you incorporated the templates in this repository in your own existing vault, you will have to configure these things yourself.


## 🧑‍🏫 The basics of Obsidian

See [Obsidian](https://obsidian.md/) for help on Obsidian in general.
See the "Community plugins" settings for information about the plugins we use.
See [[❓ Help]] for an overview on how to tag, link to files, format, etc.


## 📓 Organise your days with daily notes

This vault is mostly centered around **daily notes**. That is where we:
- Write down tasks for the day 📝
- Recover tasks we forgot to do 🧐
- Be reminded of tasks with a due-date 🗓️
- Write down lessons learned 🌈
- Track our habits and anti-habits 📈
- Be reminded of birthdays 🎉
- Quickly navigate to meeting notes 👥
- And more. 🚀

### 📝 Create daily notes

Use the shortcut  `⌘ + D` to open today's daily note. If it doesn't exist, it will automatically create a note for you under "00. 📓 Log/🗒 Daily/"  using the template "`_`♻️ Templates/00. 📓 Daily.md":

Check out the [[00. 📓 Daily|daily note template]] to learn how the different sections are defined and how they can be used. While you're at it, check out the other templates as well!

### ↔ Navigate between daily notes

There are several ways to navigate between daily notes:

- Use shortcuts:
	- `⌘ + SHIFT + D`: next daily note (if it exists)
	- `⌘ + SHIFT + A`: previous daily note (if it exists)
	- `⌘ + D`: Today's daily note
- Use the links that are automatically included in the daily note. E.g. clicking the link `Tomorrow`, will either open tomorrow's daily note if it exists, or create an empty file with the right title for tomorrow's note.  In the latter case, insert the daily note template by using the shortcut `⌘ + Shift + I`  and selecting the Daily note template. This will insert the template, and move the file to `📓 Log/🗒 Daily/`.
- Or you could manually create the file (not recommended)

### ✅ Manage your tasks

If you leave an uncompleted task in a daily note, it will show up in the "Open" section in your daily notes of subsequent days.

If you have a task you want to do soon, but not today, put it in [[_⏱ Short term|⏱ Short term]].
If you have a tasks you want to do at some point, but not soon, put in in [[_📆 Long term|📆 Long term]].

The [[📖 Backlog]] note provides an overview of where to find all these notes and todo's, and more.

### ⏱ Query time-critical todos

Any todo, anywhere in the vault, may be supported by a date indicator. These help us query the todo's and present them in a daily note when needed. There are two indicators supported in the templates: a due date, and a scheduled date.

#### 🗓 Todo due date

If you want a todo to get done by a date `<YYYY-MM-DD>` the latest , append `🗓<YYYY-MM-DD>` to the todo. E.g.:

- [ ] Do something 🗓2022-12-15

These kind of todos appear both on the day itself and the day before the due date in your daily note under "Due". If the due date has passed, this todo will appear under "Late".

#### ⏳ Todo scheduled date

If you want to be reminded earlier of a todo than a day before the due date, use `⏳<YYYY-MM-DD>` to schedule the todo for `<YYYY-MM-DD>`. From that day onwards, this todo will appear under "Due" in your daily notes. E.g.:

- [ ] Do something else ⏳2022-12-01 🗓2024-12-15

> Tip: if you want to speed up writing dates, consider creating a keyboard shortcut to insert the current date. [This](https://discussions.apple.com/thread/8651300) helped me set it up.

### 🌈 Track your daily lessons

Learned something meaningful today? Write it down as a task in your daily note, under the corresponding section, and append a rainbow 🌈. E.g.:

- [ ] A person learns something new every day 🌈

 These lessons are queried in the [[🌈 Lessons]] note. Under the "Lessons" section in your daily note, we also randomly query one of these lessons, so you are reminded of them later on.

### 🚩 Milestones

Did something big happen today? Within your daily notes, you can create a milestone by appending 🚩`<YYYY-MM-DD>` to a todo. E.g.:

- [ ] I made it this far in the readme! 🚩2023-01-16

Check out the [[🚩 Milestones]] note to get an overview of all these events by their corresponding section.

### 📈 Habit tracking 

Every daily note comes with a habit tracker. You can configure this in [[📈 Habits.config]].

Throughout your daily notes, you can log your habits as:
- [ ] Today I did something I want to do more of 📈

And your anti-habits as:
- [ ] Today I did something I want to do less of 📉

You can also find the habits tracker overview in [[📈 Habits]].

This tracker is created using the plugin "CustomJS". The Javascript files that are used to analyse the daily notes for habits can be found under `.obsidian/scripts`.

![[Pasted image 20230729185113.png|600]]

### 🌍 Scraping the news and weather

One section of the daily notes contains some Python blocks.
When these are executed, a scraper will run and grab info from news or weather websites.

This is included in this template as an example.
To make this work you should configure your "Execute Code" plugin settings.

![[Pasted image 20230729185208.png|600]]

### 🎉 Birthdays

Birthdays are queried from the "person" notes. You can find a template for this in the Templates folder. All you have to do is add a task in the person-note with 🎉`<yyyy-mm-dd>` and the person's birthday will appear in your daily note. E.g.

- [ ] Yke jarig 🎉`0000-01-30`

Often, you probably won't know the year, but filling in `0000` for the year still works.

### 🗃 Sort daily notes

Open a terminal in your vault and run `make structure` to sort all daily notes (up to today) into  different folders. For example, the note `2022-11-10, ...` would be placed into the folder 
"🗓 2022/November". `make structure` executes `structure.py` under `.obsidian/scripts/`

> **Note:** this script will likely break when you change folder names.

## 🤯 Meetings, goals, projects and more 

There are a few more things you can do with this vault:

- **Quickly create meeting notes with the right templates**. Make sure to name your meeting notes: `<yyyy-mm-dd> Meeting Title`, only then it will appear in your daily notes. 👥
- **Keep track of meeting actions**.  Fill in the actions under the "Actions" section and find them again in the [[🏃 Meeting actions]] overview. (Or query them again in your next meeting note) 🏃
- **Create your notes quickly** with a pre-defined note-template. And force youself to tag it! 📝
- **Define projects** and track their progress with tags `todo/todo`, `todo/doing`, `todo/done`. 🧩
- **Make your goals concrete** with the goals template. 🚀
- **Prepare for your next trip** before you even know where you're going 🗺️

There are endless possibilities with Obsidian, and this vault only covers a few. 
Please share your questions, feedback, and your own templates! 😄
