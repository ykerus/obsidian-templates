class DailyNotes {

    constructor() {
        this.notes = null;
        this.dates = null;
    }

    checkDuplicates() {
        const dateSet = new Set();
        this.dates.forEach(date => {
            if (dateSet.has(date)) {
                throw new Error(`Duplicate date found: ${date}`);
            }
            dateSet.add(date);
        });
    }

    getDates() {
        // get dates in same order as dailyNotes
        const dateRegex = /^\d{4}-\d{2}-\d{2}/;
        const dates = this.notes.map(note => {
            const fileName = note.file.name;
            const match = fileName.match(dateRegex);
            if (!match) {
                return null;
            }
            return match[0];
        }).filter(date => date !== null);
        if (dates.length !== this.notes.length) {
            throw new Error('Some notes do not have a valid date');
        }
        return dates
    }

    getNotes(dv, tag = '#log', sort = 'desc') {
        this.notes = dv.pages(tag).sort(p => p.file.name, sort);
        this.dates = this.getDates();
        this.checkDuplicates();
    }

    filter(startDate, endDate = null, untilToday = true) {
        // filter out notes that are not in the date range
        // if untilToday, then endDate = min(currentDate, endDate)

        endDate = endDate ? endDate : "2199-12-31";

        const _startDate = new Date(startDate);
        const currentDate = new Date();
        currentDate.setHours(23, 59, 59, 999);

        const _endDate = untilToday ? currentDate : new Date(endDate);

        const filteredNotes = this.notes.filter((note, index) => {
            const noteDate = new Date(this.dates[index]);
            return noteDate >= _startDate && noteDate <= _endDate;
        });
        return filteredNotes;
    }

    filter(startDate, endDate = null, untilToday = true) {
        // filter out notes that are not in the date range
        // if untilToday, then endDate = min(currentDate, endDate)

        const _startDate = new Date(startDate);
        const currentDate = new Date();
        currentDate.setHours(23, 59, 59, 999);

        let _endDate;
        if (endDate) {
            const parsedEndDate = new Date(endDate);
            _endDate = untilToday ? new Date(Math.min(currentDate, parsedEndDate)) : parsedEndDate;
        } else {
            _endDate = untilToday ? currentDate : new Date("2199-12-31");
        }

        const filteredNotes = this.notes.filter((note, index) => {
            const noteDate = new Date(this.dates[index]);
            return noteDate >= _startDate && noteDate <= _endDate;
        });
        return filteredNotes;
    }
}
