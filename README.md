# Obsidian templates

---

## Introduction

This repository contains an obsidian vault with templates and structures that may be useful if you struggle keeping your todos, meetings, actions, projects, etc. organised. With these templates, you can start each day with a fresh note in which you can organise and log your day. These notes are templated using Obsidian's community plugin `templater`. Forgotten todos (among other things) are queried using Obsidian's comunity plugin `dataview`, and collected in a central note, so nothing gets lost.


## Getting started

- Install Obsidian
- Download this project
- Open this project in Obsidian
- Create daily notes, meeting notes, projects, todos, etc.

...

WORK-IN-PROGRESS


## Sort daily notes

Open a terminal in your vault and run `make structure` to sort all daily notes (up to today) into the 
right folders. For example, the note `2022-11-10, ...` will be placed into the folder 
`🗓 2022/November`. `make structure` will call `structure.py` under `.obsidian/scripts/`

Note that the script `structure.py` assumes all daily notes to be located under `📓 Log/🗒 Daily` 
and that the folders for each year get the prefix emoticon `🗓`. If you want a different structure or naming, make sure to change that in both your notes/folders and in `structure.py`
