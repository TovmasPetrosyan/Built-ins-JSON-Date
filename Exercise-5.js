function threeDaysAgo(date) {
    const resData = new Date(date);
    resData.setDate(resData.getDate() - 3);
    const year = resData.getFullYear();
    const month = (resData.getMonth() + 1).toString().padStart(2,"0");
    const day = resData.getDate();

    return `"${year}-${month}-${day}"`
}



