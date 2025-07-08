---
tags:
  - obsidian
date: 2025-07-08
---
---

## 👋 Introduction

Obsidian is a great note-taking app. However, it does require some knowledge on how to use it. This guide will take you some of the basic concepts and syntax to get started. For more info, see the [Obsidian docs](https://help.obsidian.md/Obsidian/Index).

---

## 🗃 Structure

Use tags and links to easily search or navigate through notes.

### `#️⃣` Tags

General tags:  `#tag`
Nested tags:  `#tag/nested`

### 🔗 Links

Link to "note X":  `[[note X]]`
Link to "heading Y" in "note X":  `[[note X#heading Y]]`
Link to a text block within "note X":  `[[note X^]]` 
Link to a text block within any file:  `[[^^]]`

---

## Formatting

### Todo list

- [x] Item
- [-] Item
- [ ] Item

### Table

| First header | Second header |
|--------------|---------------|
| Col 1        | Col 2         |

### Text style

| Raw                 | Preview                |
| ------------------------ | ------------------- |
| `**bold**` or `__bold__` | **bold**            |
| `*italic*` or `_italic_` | *italic*            |
| `~~striked-through~~`    | ~~striked-through~~ |

### Block quote

> "This is a block quote"

### Info block

> [!INFO] > Here's an info block.

### Python code

```python
import this
```

### Math

$$\begin{vmatrix}a & b\\ c & d \end{vmatrix}=ad-bc$$

### Images

`![[img.jpg|200x100]]`

### Link display

[[❓ Help|I need help]] - links to "❓ Help", but displays "I need help"

### Footnote

Add a footnote like this [^1].

[^1]: Footnote

### Query

Using [Dataview](https://blacksmithgu.github.io/obsidian-dataview/). For example, to query all files with the tag `#template` in this vault:
```dataview
list
from #template
```

### Graphs and diagrams

Made with [Mermaid](https://mermaid-js.github.io/mermaid/#/)

```mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
```

---

## Shortcuts

Most of these are vault-specific and fully configurable to your needs.
- `Cmd + ENTER` - Embed new Excalidraw drawing
- `Cmd + N` - Quickadd file or list item
- `Cmd + K` - Turn selected words into link
- `Cmd + E` - Toggle preview/edit mode
- `Cmd + L` - Light mode
- `Cmd + ;` - Dark mode
- `Cmd + U` - Underline
- `Cmd + T` - New tab
- `Cmd + Shift + Backspace` - Close all other tabs
-  `Cmd + 1` - Toggle checkbox
- `Cmd + Shift + F` - Search all files
- `Cmd + (Shift) + P` - Open command pallet
- `Cmd + ] / [` - Change indentation left or right
- `Cmd + D` - Open today's daily note
- `Cmd + Shift + D` - Next daily note
- `Cmd + Shift + A` - Previous daily note
- `Cmd + Shift + I` - Insert template
- `Cmd + Shift + S` - Insert daily template
- `Option + A` - Previous file
- `Option + D` - Previous file but in the other direction
- `Cmd + Esc` - Delete current file

--- 

## Tricks

- Hold `Cmd` and click several notes to open them side-by-side
- Drag a note and pin it to the side bar for quick access
- Create presentation by using `---` to separate slides, 
  and start presentation from command palette
- Add images simply by dragging them into your note
- Hold `Cmd` while hovering over link to see preview
- Hold `Cmd` and click on link to open in split pane
- Pin a pane to make sure it never gets replaced
- Link to obsidian note in other app using "Copy Obsisian URL" from command palette
- (If using iCloud) Synchronize your notes by putting your fault in an iCloud folder
- (If using iCloud) Use `.nosync` extension to prevent folder from being synced to iCloud