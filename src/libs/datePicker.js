class datePicker {
    constructor({ year, month, format }) {
        const day = new Date(year, month, 0).getDate()
        this.options = { year, month, day, format }
        this.init()
    }
    init() {
        let { year, month, day, format } = this.options
        const preMonth = month - 1
        const preMonthDays = new Date(year, preMonth, 0).getDate()
        const nextMonth = month + 1
        let weeks = [
            { label: '日', days: [] },
            { label: '一', days: [] },
            { label: '二', days: [] },
            { label: '三', days: [] },
            { label: '四', days: [] },
            { label: '五', days: [] },
            { label: '六', days: [] }
        ]
        const firstDay = new Date(`${year}-${month}-1`).getDay()
        if (firstDay > 0) {
            for (let i = 0; i < firstDay; i++) {
                let stateYear = preMonth > 0 ? year : year - 1
                let stateMonth = preMonth > 0 ? preMonth : 12
                let weekDay = new Date(`${stateYear}-${stateMonth}-${preMonthDays - i}`).getDay()
                let keys = { day: preMonthDays - i, month: stateMonth, year:stateYear }
                weeks[weekDay].days.unshift({ ...keys, value: this.timeFormat(keys, format) })
            }
        }
        for (let i = 1; i < day + 1; i++) {
            let weekDay = new Date(`${year}-${month}-${i}`).getDay()
            let keys = { year, month, day: i }
            weeks[weekDay].days.push({ ...keys, value: this.timeFormat(keys, format) })
        }
        const lastDay = new Date(`${year}-${month}-${day}`).getDay()
        if (lastDay < 6) {
            for (let i = 1; i < 7 - lastDay; i++) {
                let stateMonth =nextMonth<13?nextMonth : 1
                let stateYear = nextMonth<13 ?year:year+1
                let weekDay = new Date(`${stateYear}-${stateMonth}-${i}`).getDay()
                let keys = { day: i, month: stateMonth, year:stateYear }
                weeks[weekDay].days.push({ ...keys, value: this.timeFormat(keys, format) })
            }
        }
        this.calendar = weeks
    }
    timeFormat(time, format = 'YYYY-MM-DD') {
        const acts = {
            'YYYY-MM-DD': () => `${time.year}-${time.month < 10 ? '0' + time.month : time.month}-${time.day < 10 ? '0' + time.day : time.day}`,
            'YYYY-M-D': () => `${time.year}-${time.month}-${time.day}`,
        }
        const actiton = acts[format] || acts['YYYY-MM-DD']
        return actiton.call()
    }
}
export default datePicker