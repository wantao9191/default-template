const config = { date: ['YYYY-MM-DD', 'YYYY-M-D', 'YYYY/MM/DD'], month: ['YYYY-MM','YYYY/MM', 'YYYY-M','YYYY/M'], year: ['YYYY'] }
function formatTime(date, format) {
	/* 将时间戳转换为 Date 格式 */
	const isNumber = /^[0-9]+.?[0-9]*/.test(date);
	if (isNumber) {
		const dateLength = `${date}`.length;
		// 不足13位补足
		const lessThan = date * Math.pow(10, 13 - dateLength);
		// 多于13位去除
		const moreThan = +`${date}`.substring(0, 13);
		const timestamp = dateLength < 13 ? lessThan
			: dateLength > 13 ? moreThan : date;
		date = new Date(timestamp);
	}

	// 剔除非 Date 格式的数据
	const isDateFormat = date instanceof Date;
	if (!isDateFormat) return '-';

	const transTime = (t) => { return t < 10 ? `0${t}` : t };
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = transTime(date.getMinutes());
	const seconds = transTime(date.getSeconds());
	const timeMap = {
		'Y+': year,		// 年
		'M+': month,	// 月
		'D+': day,		// 日
		'h+': hours,	// 时
		'm+': minutes,	// 分
		's+': seconds,	// 秒
	};

	for (const k in timeMap) {
		const ret = new RegExp(`(${k})`).exec(format);
		if (ret) {
			format = format.replace(ret[0], String(timeMap[k]).length >= ret[0].length ? timeMap[k] : '0' + timeMap[k]);
		}
	}
	return format;
}
export { config, formatTime }
