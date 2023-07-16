export function timeSince(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return `${interval} سال${interval === 1 ? '' : 's'} پیش`;
    }

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return `${interval} ماه${interval === 1 ? '' : 's'} پیش`;
    }

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return `${interval} روز${interval === 1 ? '' : 's'} پیش`;
    }

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return `${interval} ساعت${interval === 1 ? '' : 's'} پیش`;
    }

    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return `${interval} دقیقه${interval === 1 ? '' : 's'} پیش`;
    }

    return `همین الان`;
}