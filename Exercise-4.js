function longestTime(h, m, s) {
    const hoursSecond = h * 3600;
    const minuteSecond = m * 60;
    const maxDuration = Math.max(hoursSecond, minuteSecond, s);
    if (maxDuration === hoursSecond) {
        return h;
    } else if (maxDuration === minuteSecond) {
        return m;
    } else {
        return s;
    }

}






