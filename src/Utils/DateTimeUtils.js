export function timeSince(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return `${interval} سال پیش`;
    }

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return `${interval} ماه پیش`;
    }

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return `${interval} روز پیش`;
    }

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return `${interval} ساعت پیش`;
    }

    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return `${interval} دقیقه پیش`;
    }

    return `همین الان`;
}

export function getTheMonthDays(date) {
    const year = date.getFullYear(); // gets the current year
    const month = date.getMonth(); // gets the current month (0-11)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // gets the number of days in the current month
    console.log(daysInMonth)
    return daysInMonth
}