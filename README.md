# Obsidian templates 

```table-of-contents
```

## 👋 Introduction

This repo forms the basis of my personal Obsidian vault. Hope you find it as useful as I do!

It can be used as a starting point of a new vault, or as inspiration for your existing vault.

## 🚀 Getting started

1. Install [Obsidian](https://obsidian.md/)
2. Download this repository
3. Rename the repository "Obsidian"
4. Open this repository as vault in Obsidian (make sure the vault is called "Obsidian")
5. Install remaining plugins manually (see [[README#⚙️ Manual installations|⚙️ Manual installations]])
6. Create daily notes, meeting notes, drawings, todos, etc.
7. Check out the rest of this README to learn some useful workflows

> 💡 **Tip**: Do steps 1-3 already and open this README in Obsidian. Then the following sections will be rendered nicely.

> [!WARNING] Only if you use this repo as your entire vault, your keyboard shortcuts and plugin configurations will be the same as used in the following sections. If you incorporated the templates in this repository in your own existing vault, you will have to configure these things yourself.

## 🧑‍🏫 The basics of Obsidian

See [Obsidian](https://obsidian.md/) for help on Obsidian in general. See the "Community plugins" settings in this vault for information about the plugins we use.

## 🧑‍💻 How to work with this vault

Below are the most important workflows I use. There may be more, but you'll figure those out. And you can of course also change this vault to your liking.

### ☀️ Start your day with a fresh daily note

Hit `CMD + D` to open today's daily note. This note is based on a configurable template [[Daily]] in the templates folder.

In your daily note, you can add meeting notes, work todo's, personal todo's and more through buttons.

The todo's and files you see in your daily note live elsewhere in the vault to keep things organized. Todo's, for example are collected in [[🧑‍💻 Work todos]] and [[🏡 Personal todos]].

### 📅 Be reminded of scheduled or forgotten todo's

When you add a todo from your daily note, it will be added as:

- [ ] `[[<date>]]` This is a todo

in the corresponding todo file, with `<date>` the date of the daily note.

In today's and all subsequent daily notes, this todo will remain visible until it is checked. So you'll never forget your tasks!

That also means that you can manually change the date the todo appears in your daily note by editing the `<date>` in the todo directly. This way you can schedule todo's. 💡

Can't figure out what date belongs the day you have in mind? Try `Option + Shift + →`.

### 🔜 Save todo's and inspiration for later

Do you have todo's that don't fit in the daily note, because you just want to do them in some point of your life? Put them in the [[🕰️ Later todos]] or [[🔜 Soon todos]].

Or, if the todo is not really a *todo*, but rather inspiration for a [[📑 Lees inspiratie|book]] to read, or a [[🎥 Films inspiratie|film]] to watch, try the Collections folder. 

### 👥 Add meeting notes

Quickly add meetings from your daily note with a click on a button.

Unfortunately, this doesn't work exactly the same as todo's that automatically get the date of the daily note attached. Instead, there are two options:

1. Add note with *today*'s date (independent of daily note)
2. Add note with custom date (`yyyy-mm-dd`)

The first is to quickly add a note for a meeting you're in or about to have.
The second is to "schedule" a meeting note, as the meeting note will appear in your daily note when the date matches.

The meeting note is also templated, which you can customize here: [[Meeting]]

### 🎨 Quickly draw up your ideas

Using the Excalidraw plugin, you can quickly open a new canvas with `CMD + Enter` and start drawing. For more info, see the docs of the plugin.

### 🎉 Be reminded of birthdays

By adding people notes with a birthday (year is not necessary), you will be reminded of birthdays in the corresponding daily note!

### 🔎 Find what you're looking for

Instead of Obsidian's built-in search functionality, this vault makes use of the plugin Omnisearch. See the plugin docs for more information. It works very well!

Note that some tags are given lower priority in the search results, such as `#archive`. You can configure this as you like.

### ✍️ Keep your knowledge tidy with minimal effort

This vault is based on the assumption that you will *not* keep things tidy by default. (At least I don't). So there are structures and tools in place to help you out.

**Scratch, info and archived notes**

For example, it's hard to create a new non-templated note. Try `CMD + N`, it will allow you to create a `#scratch` note (with the [[Scratch]] template). This can be compared to a piece of paper you use to write down your first thoughts. 

Later, the `#scratch` note can be promoted to `#note` note, or demoted to `#archive`. `#note` or "info" notes should add knowledge to your vault that you always want to have available. `#archive` notes should have info that you don't always need, but you just want to "remember" it. Any other notes may be deleted.

By default, scratch notes get the tag `#keep-in-daily`, so the note stays visible in your daily note. This will remind you that it's still actively being edited, or it will remind you to demote or promote it.

To promote/demote notes quickly, you can use the invisible scripts from the Scripts folder with `Option + Shift + S` (convert `#scratch` to `#note` and vice versa), and `Option + Shift + A` (convert any note to `#archive` and back). 

**Inbox folder for uncategorized files**

New non-templated notes (if you manage to create one) and un-archived notes end up in the Inbox folder. The goal is to keep the Inbox and Scratch notes folder as empty as possible over time.

**Cleaning up unused attachments**

There is also a script in this vault that will help you to clean up unused attachments. From the command palette, select "Shell commands: Execute: Clean up attachments" to delete attachments that are not referenced anywhere in your vault. This includes Excalidraw drawings and any other file in the Attachments folder.

**Finding untagged or unused notes**

See [[🏷️ Tag list]] and [[📃 Page sizes]] to identify notes with the least tags or least character count. Those could indicate that the note is not adding much value to your vault.

### 🤖 Automate and configure

Automations (like buttons, scripts and shortcuts) are mostly made possible through plugins such as QuickAdd and Shell commands. In the plugin settings you can see how different automations in this vault were configured. 

Feel free to change them, as well as keyboard shortcuts, and anything else in this vault.

## ⚙️ Manual installations

**Install Excalidraw plugin manually if it does not work on first launch**
- In this case, manually install the Excalidraw plugin `obsidian-excalidraw-plugin` again from the community plugins.
- Then, set the following configurations either in the plugin settings overview, or directly in `.obsidian/plugins/obsidian-excalidraw-plugin/data.json`:
```json
{
    "folder": "🎨 Excalidraw/Drawings",
    "cropFolder": "🎨 Excalidraw/Cropped",
    "annotateFolder": "🎨 Excalidraw/Annotated",
    "embedUseExcalidrawFolder": true,
    "templateFilePath": "🎨 Excalidraw/Template.excalidraw",
    "scriptFolderPath": "🎨 Excalidraw/Scripts"
}
```

**(optional) Install Copilot plugin for access to LLMs in Obsidian**
- Install the plugin `copilot` if you already have access to an LLM provider, and you want to be able to access the LLMs through Obsidian.
- The following settings can be used as inspiration:
```json
{
    "defaultSaveFolder": "💬 Copilot/Conversations",
    "defaultConversationTag": "#copilot",
    "autosaveChat": false,
    "defaultOpenArea": "view",
    "customPromptsFolder": "💬 Copilot/Prompts",
    "indexVaultToVectorStore": "ON MODE SWITCH",
    "qaExclusions": "%23daily",
    "qaInclusions": "%23note,%23scratch,%23meeting,%23copilot",
}
```

## 🙋‍♀️ Questions?

Raise an issue in Github and I'll try to help you out.
