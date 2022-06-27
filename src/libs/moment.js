export function formatTime(time, format) {
    let date = new Date(time);
    let year = '0' + date.getFullYear();
    let month = '0' + (date.getMonth() + 1);
    let day = '0' + date.getDate();
    let hour = '0' + date.getHours();
    let minute = '0' + date.getMinutes();
    let second = '0' + date.getSeconds();
    if (format.includes('y')) {
        format = format.replace(/y+/, year.slice(-(format.match(/y+/)[0].length)));
    }
    if (format.includes('M')) {
        format = format.replace(/M+/, month.slice(-(format.match(/M+/)[0].length)));
    }
    if (format.includes('d')) {
        format = format.replace(/d+/, day.slice(-(format.match(/d+/)[0].length)));
    }
    if (format.includes('h')) {
        format = format.replace(/h+/, hour.slice(-(format.match(/h+/)[0].length)));
    }
    if (format.includes('m')) {
        format = format.replace(/m+/, minute.slice(-(format.match(/m+/)[0].length)));
    }
    if (format.includes('s')) {
        format = format.replace(/s+/, second.slice(-(format.match(/s+/)[0].length)));
    }
    return format;
}