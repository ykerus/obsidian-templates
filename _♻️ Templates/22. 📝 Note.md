<%* 
	// Template for a general note.  For extensive documentation refer to the "📓 Daily" template.
-%>
<%* 
	intro = tp.system.prompt("What is this note about?", "", throw_on_cancel=true, multiline=true)
	tags = tp.system.prompt("Note tags:", "", throw_on_cancel=true)
-%>
# <% tp.file.title %>

---

Links: 
Tags: <% tags %><%* if (1 == 0) { -%> #template <%* } %>
Date: <% tp.date.now("YYYY-MM-DD") %>

---

## 👋 Introduction

<% intro %>