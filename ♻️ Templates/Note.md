<%* if (1 == 0) { -%> #template <%* } -%>
<%*
    folder = "📑 Notes/"
    await tp.file.move(folder + tp.file.title)
-%>
---
tags:
  - note
date: <% tp.date.now("YYYY-MM-DD") %>
daily: "[[<% tp.date.now("YYYY-MM-DD") %>]]"
template: "[[Note]]"
---
---

