import { formatTime,config } from './moment.js'
class datePicker {
    constructor({ year, month, format, type }) {
        const day = new Date(year, month, 0).getDate()
        this.options = { year, month, day, format, type }
        this.init()
    }
    init() {
        let { year, month, day, format, type } = this.options
        const preMonth = month - 1
        const preMonthDays = new Date(year, preMonth, 0).getDate()
        const nextMonth = month + 1
        let labelFormatOptions = config[type]
        let labelFormat = labelFormatOptions && labelFormatOptions.find(l => l === format)
        labelFormat = labelFormat || labelFormatOptions[0]
        const today = formatTime(new Date(), labelFormat)
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
                const dateKey = `${stateYear}-${stateMonth}-${preMonthDays - i}`
                let weekDay = new Date(dateKey).getDay()
                let timestamp = new Date(dateKey).getTime()
                let label = formatTime(timestamp, labelFormat)
                let value = format ? formatTime(timestamp, labelFormat) : timestamp
                let keys = { day: preMonthDays - i, month: stateMonth, year: stateYear, label, value ,isCheck:label ===today}
                weeks[weekDay].days.unshift(keys)
            }
        }
        for (let i = 1; i < day + 1; i++) {
            const datekey = `${year}-${month}-${i}`
            let weekDay = new Date(datekey).getDay()
            let timestamp = new Date(datekey).getTime()
            let label = formatTime(timestamp, labelFormat)
            let value = format ? formatTime(timestamp, labelFormat) : timestamp
            let keys = { year, month, day: i, value, label, timestamp,isCheck:label ===today }
            weeks[weekDay].days.push(keys)
        }
        const lastDay = new Date(`${year}-${month}-${day}`).getDay()
        if (lastDay < 6) {
            for (let i = 1; i < 7 - lastDay; i++) {
                let stateMonth = nextMonth < 13 ? nextMonth : 1
                let stateYear = nextMonth < 13 ? year : year + 1
                const dateKey = `${stateYear}-${stateMonth}-${i}`
                let weekDay = new Date(dateKey).getDay()
                let timestamp = new Date(dateKey).getTime()
                let label = formatTime(timestamp, labelFormat)
                let value = format ? formatTime(timestamp, labelFormat) : timestamp
                let keys = { day: i, month: stateMonth, year: stateYear, value, label, timestamp,isCheck:label ===today }
                weeks[weekDay].days.push(keys)
            }
        }
        this.calendar = weeks
    }
}
export default datePicker