function getMonthOfYear(number) {
    const months = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    };
    if (1 <= number && number <= 12) {
        return `"${months[number]}"`;
    } else {
        return "The number must be between 1 and 12";
    }
}

