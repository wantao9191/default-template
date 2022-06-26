class datePicker {
    constructor({ year, month, day }) {
        this.options = { year, month, day }
        this.init()
    }
    init() {
        let { year, month, day } = this.options
        const preMonth= month - 1
        const preMonthDays = new Date(year, preMonth, 0).getDate()
        const nextMonth = month+1
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
        if(firstDay>0) {
            for(let i = 0;i<firstDay;i++){
                let weekDay = new Date(`${year}-${preMonth}-${preMonthDays-i}`).getDay()
                weeks[weekDay].days.unshift({day:preMonthDays-i,month:preMonth,year})
            }
        }
        for (let i = 1; i < day + 1; i++) {
            let weekDay = new Date(`${year}-${month}-${i}`).getDay()
            weeks[weekDay].days.push({year,month,day:i})
        }
        const lastDay =new Date(`${year}-${month}-${day}`).getDay()
        if(lastDay<6) {
            for(let i = 1;i<7-lastDay;i++){
                let weekDay = new Date(`${year}-${nextMonth}-${i}`).getDay()
                weeks[weekDay].days.push({day:i,month:nextMonth,year})
            }
        }
        this.calendar = weeks
    }
}
export default datePicker