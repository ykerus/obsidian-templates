
class HabitTracker {

    constructor() {
        this.habitsDict = null;
    }

    checkInit() {
        if (this.habitsDict === null) {
            throw new Error(`HabitsConfig is not known, call init() first`);
        }
    }

    checkDict() {
        // helps catch typos in the init habits config
        this.checkInit();
        const ignore_attributes = ["end", "description"]

        let habitAttributes = new Set();

        for (const habit in this.habitsDict) {
            for (const attribute in this.habitsDict[habit]) {
                if (!ignore_attributes.includes(attribute)) {
                    habitAttributes.add(attribute);
                }
            }
        }
        for (const habit in this.habitsDict) {
            for (const attribute of habitAttributes) {
                if (!this.habitsDict[habit].hasOwnProperty(attribute)) {
                    throw new Error(`Attribute '${attribute}' is not defined for all habits`);
                }
            }
        }
    }

    init(habitsConfig) {
        this.habitsDict = habitsConfig;
        this.checkDict();
    }

    checkValues(habit, attributes) {
        this.checkInit();

        for (const attribute of attributes) {
            if (!this.habitsDict[habit].hasOwnProperty(attribute)) {
                throw new Error(`Attribute '${attribute}' is not defined for habit ${habit}`);
            }
        }
    }

    getMask(habit, dailyNotes) {
        // get a mask of 1s and 0s for each daily note: 1 if the habit is present, 0 otherwise
        this.checkValues(habit, ["isAntiHabit"])

        const tag = this.habitsDict[habit]["isAntiHabit"] ? '📉' : '📈';
        const valueTag = this.habitsDict[habit]["isAntiHabit"] ? 0 : 1;
        const valueNoTag = this.habitsDict[habit]["isAntiHabit"] ? 1 : 0;

        const keywords = this.habitsDict[habit]["keywords"];
        this.habitsDict[habit]["mask"] = dailyNotes.map(note => {
            const tasks = note.file.tasks.filter(t => keywords.some(keyword => t.text.toLowerCase().includes(keyword)));
            return tasks.some(t => t.text.includes(tag)) ? valueTag : valueNoTag;
        });
    }

    getStreak(habit) {
        this.checkValues(habit, ["allowMissing", "isAntiHabit", "mask"])
        let streak = 0;
        let missingDays = 0;

        for (let index = 0; index < this.habitsDict[habit]["mask"].length; index++) {
            const value = this.habitsDict[habit]["mask"][index];

            if (value === 1) {
                streak++;
                missingDays = 0;
            } else {
                if (index === 0 && !this.habitsDict[habit]["isAntiHabit"]) {
                    continue;
                }

                missingDays++;
                if (missingDays > this.habitsDict[habit]["allowMissing"]) {
                    break;
                }
            }
        }
        return streak;
    }

    getBestStreak(habit) {
        this.checkValues(habit, ["allowMissing", "mask"])
        let streak = 0;
        let bestStreak = 0;
        let missingDays = 0;

        for (const value of this.habitsDict[habit]["mask"]) {
            if (value === 1) {
                streak++;
                missingDays = 0;
            } else {
                missingDays++;
                if (missingDays > this.habitsDict[habit]["allowMissing"]) {
                    bestStreak = Math.max(streak, bestStreak)
                    streak = 0;
                }
            }
        }
        return Math.max(streak, bestStreak);
    }

    getMissedDays(habit) {
        // days since the last time the habit was shown
        this.checkValues(habit, ["isAntiHabit", "mask"])
        let missedDays = 0;
        for (let index = 0; index < this.habitsDict[habit]["mask"].length; index++) {
            const value = this.habitsDict[habit]["mask"][index];
            if (value === 0) {
                if (!(index == 0 && !this.habitsDict[habit]["isAntiHabit"])) {
                    missedDays++;
                }
            } else {
                break;
            }
        }
        return missedDays;
    }

    getDaysLeft(habit) {
        this.checkValues(habit, ["allowMissing", "missedDays", "isAntiHabit", "mask"])

        return Math.max(
            0, this.habitsDict[habit]["allowMissing"] - this.habitsDict[habit]["missedDays"]
        );
    }

    getDaysToGoal(habit) {
        this.checkValues(habit, ["streakGoal", "streak"])

        return Math.max(
            0, this.habitsDict[habit]["streakGoal"] - this.habitsDict[habit]["streak"]
        );
    }

    getTotalComplete(habit) {
        this.checkValues(habit, ["mask"])
        let count = 0;
        for (const value of this.habitsDict[habit]["mask"]) {
            count += value;
        }
        return count;
    }

    getCompletion(habit, streak) {
        this.checkValues(habit, ["streakGoal"])
        return Math.min(
            100, (streak / this.habitsDict[habit]["streakGoal"]) * 100
        ).toFixed(0)
    }

    getSuccess(habit, streak) {
        this.checkValues(habit, ["streakGoal"])
        return streak >= this.habitsDict[habit]["streakGoal"];
    }

    getTableHeader(habit) {
        this.checkValues(habit, ["success", "daysToGoal", "streak", "allowMissing", "daysLeft"])
        let header = habit
        if (this.habitsDict[habit]["success"]) {
            header = '🎉 🎉 ' + header + ' 🎉 🎉'
        } else if (this.habitsDict[habit]["daysToGoal"] == 1) {
            header = header + ' 👀'
        }

        const allowMissing = this.habitsDict[habit]["allowMissing"]
        if (this.habitsDict[habit]["streak"] > 0 && allowMissing > 0) {
            if (allowMissing >= 5 && this.habitsDict[habit]["daysLeft"] <= 2) {
                header = header + ' ❗️'
            } else if (allowMissing < 5 && this.habitsDict[habit]["daysLeft"] == 0) {
                header = header + ' ❗️'
            }
        }
        return header
    }

    getEndDate(habit, forceEndDate = null) {
        const habitEnd = this.habitsDict[habit]["end"];
        let end;

        if (forceEndDate) {
            if (habitEnd && habitEnd < forceEndDate) {
                end = habitEnd;
            } else {
                end = forceEndDate;
            }
        } else {
            end = habitEnd ? habitEnd : "2199-12-31";
        }

        return end;
    }

    getHabitStats(habit, DailyNotes, forceEndDate = null) {
        let habitDict = this.habitsDict[habit]

        const filteredNotes = DailyNotes.filter(habitDict["start"], this.getEndDate(habit, forceEndDate))

        this.getMask(habit, filteredNotes)
        habitDict["period"] = filteredNotes.length
        habitDict["streak"] = this.getStreak(habit)
        habitDict["bestStreak"] = this.getBestStreak(habit)
        habitDict["missedDays"] = this.getMissedDays(habit)
        habitDict["daysLeft"] = this.getDaysLeft(habit)
        habitDict["daysToGoal"] = this.getDaysToGoal(habit)
        habitDict["totalComplete"] = this.getTotalComplete(habit)

        habitDict["completionStreak"] = this.getCompletion(habit, habitDict["streak"])
        habitDict["completionBest"] = this.getCompletion(habit, habitDict["bestStreak"])
        habitDict["success"] = this.getSuccess(habit, habitDict["bestStreak"])

        habitDict["tag"] = habitDict["isAntiHabit"] ? '📉' : '📈'
        habitDict["header"] = this.getTableHeader(habit)

        return habitDict
    }

    getStats(DailyNotes, forceEndDate = null) {
        // compute stats and append to the habits dict
        this.checkInit()

        for (const habit in this.habitsDict) {
            this.habitsDict[habit] = this.getHabitStats(habit, DailyNotes, forceEndDate)
        }
    }

    createTable(dv, tableConfig) {
        // sort habits by sortCol and display stats in table

        const sortCol = tableConfig.sortCol;
        const filteredHabits = Object.entries(this.habitsDict).filter(([habit, data]) => data["show"] !== false);
        const sortedHabits = filteredHabits.sort((a, b) => b[1][sortCol] - a[1][sortCol]);

        const headers = Object.keys(tableConfig.content);
        const rows = sortedHabits.map(([habit, data]) => {
            return headers.map(header => data[tableConfig["content"][header]]);
        });

        dv.table(headers, rows);
    }
}
