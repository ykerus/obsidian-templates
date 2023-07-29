#config/habits

Configures your habit tracker, which you can find in your daily notes, or in [[📈 Habits]].

You can select more columns to be shown in the table, e.g.:
`"daysMissed", "daysToGoal", "totalComplete"`.

See `/.obsidian/scripts` to see how it was implemented, and which other columns are available.

```json
{
	"tableConfig": {
		"sortCol": "completionStreak",
		"content": {
			"Habit": "header",
			"Streak": "streak",
			"Best": "bestStreak",
			"Goal": "streakGoal",
			"Allow": "allowMissing",
			"% Streak": "completionStreak",
			"% Best": "completionBest",
			"Tag": "tag"
		}
	},
	"habitsConfig": {
		"🙏 Work-life": {
		  "description": "When work cuts into personal time",
		  "keywords": ["overwerk", "overwork", "work-life"],
		  "streakGoal": 7,
		  "allowMissing": 0,
		  "isAntiHabit": true,
		  "start": "2023-07-27",
		  "show": true
		},
		"📚 Reading": {
		  "keywords": ["read", "lezen"], 
		  "streakGoal": 7, 
		  "allowMissing": 1,
		  "isAntiHabit": false,
		  "start": "2023-07-24",
		  "show": true
		},
		"👫 Quality time": {
		  "keywords": ["quality", "vriend"], 
		  "streakGoal": 7, 
		  "allowMissing": 6,
		  "isAntiHabit": false,
		  "start": "2023-07-24",
		  "show": true
		},
		"👨‍🍳 Good food": {
		  "description": "Not lazy like ordered food or frozen pizza",
		  "keywords": ["lazy food", "order", "bestel", "pizza"],
		  "streakGoal": 7, 
		  "allowMissing": 0,
		  "isAntiHabit": true,
		  "start": "2023-07-24",
		  "show": true
		},
		"🏋️‍♂️ Exercise": {
		  "keywords": ["exercis", "sport", "oefening"], 
		  "streakGoal": 7,
		  "allowMissing": 2,
		  "isAntiHabit": false,
		  "start": "2023-07-24",
		  "show": true
		},
		"🌳 Walking": {
		  "keywords": ["walk", "wandel"], 
		  "streakGoal": 7,
		  "allowMissing": 1,
		  "isAntiHabit": false,
		  "start": "2023-07-24",
		  "show": true
		},
		"💻 Hacking": {
		  "keywords": ["hack"], 
		  "streakGoal": 7,
		  "allowMissing": 2,
		  "isAntiHabit": false,
		  "start": "2023-07-24",
		  "show": true
		},
		"🏠 Cleaning": {
		  "keywords": ["clean", "opruim", "opgeruim", "schoon"], 
		  "streakGoal": 7,
		  "allowMissing": 3,
		  "isAntiHabit": false,
		  "start": "2023-07-24",
		  "show": true
		},
		"📝 Writing": {
		  "keywords": ["writ", "schrij"], 
		  "streakGoal": 7, 
		  "allowMissing": 1,
		  "isAntiHabit": false,
		  "start": "2023-07-24",
		  "show": true
		},
		"🎸 Music": {
		  "keywords": ["music", "muziek", "gitaar", "piano", "guitar"], 
		  "streakGoal": 7, 
		  "allowMissing": 2,
		  "isAntiHabit": false,
		  "start": "2023-07-24",
		  "show": true
		},
		"😴 Good sleep": {
		  "description": "Note down when you had too little sleep",
		  "keywords": ["slaap", "sleep", "geslapen", "slept"], 
		  "streakGoal": 7,
		  "allowMissing": 0,
		  "isAntiHabit": true,
		  "start": "2023-07-26",
		  "show": true
		},
		"📺 No shows": {
		  "keywords": ["show", "serie", "dumpert"], 
		  "streakGoal": 7,
		  "allowMissing": 0,
		  "isAntiHabit": true,
		  "start": "2023-07-24",
		  "show": true
		},
		"💬 Language": {
		  "keywords": ["taal", "language", "german", "duits", "duolingo"],
		  "streakGoal": 7,
		  "allowMissing": 1,
		  "isAntiHabit": false,
		  "start": "2023-07-27",
		  "show": true
		}
	}
}
```
