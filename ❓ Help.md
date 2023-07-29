# ❓ Help

---

Links: [Obsidian docs](https://help.obsidian.md/Obsidian/Index)
Tags: #obsidian
Date: 2022-12-17

---

## 👋 Introduction

Obsidian is a great note-taking app. However, it does require some knowledge on how to use it. This guide will take you some of the basic concepts and syntax to get started.

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
- [?] Item
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

> "This is a block quote" - Yke

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

[[❓ Help|Help]] - links to "❓ Help", but displays "Help"

### Colored text

?? select a cool theme, or edit the CSS yourself

### Footnote

Add a footnote like this [^1].

[^1]: Footnote

### Query

Using [Dataview](https://blacksmithgu.github.io/obsidian-dataview/)
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

## Short cuts

Some of these are vault-specific.

- `^ + SHIFT + ENTER` - Embed new Excalidraw drawing
- `Cmd + N` - New file
- `Cmd + K` - Turn selected words into link
- `Cmd + E` - Toggle preview/edit mode
- `Cmd + U` - Underline
- `Cmd + T` - New tab
- `Cmd + Q` - Close all other tabs
-  `Cmd + 1` - Toggle checkbox
- `Cmd + Shift + F` - Search all files
- `Cmd + (Shift) + P` - Open command pallet
- `Cmd + ] / [` - Change indentation left or right
- `Cmd + D` - Today's daily note
- `Cmd + Shift + D` - Next daily note
- `Cmd + Shift + A` - Previous daily note
- `Cmd + Shift + I` - Insert template
- `Cmd + Shift + S` - Insert daily template
- `Option + A` - Previous file
- `Cmd + Esc` - Delete current file

--- 

## Tricks

- Hold `Cmd` and click several notes to open them side-by-side
- Drag a note and pin it to the side bar for quick access
- Create presentation by using `---` to separate slides, and start from command palette
- Add images simply by dragging them into your note
- Hold `Cmd` while hovering over link to see preview
- Hold `Cmd` and click on link to open in split pane
- Pin a pane to make sure it never gets replaced
- Link to obsidian note from other app using "Copy Obsisian URL"
- Synchronize your notes by putting your fault in an iCloud folder
- Use `.nosync` extension to prevent folder from being synced to iCloud
