function getWeekOfMonth(date){
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDayOfWeek = firstDayOfMonth.getDay();       
    const days = date.getDate() - firstDayOfMonth.getDate();
    const week = Math.floor((days + firstDayOfWeek) / 7) + 1;
  
    return week;
}
//const result = getWeekOfMonth(new Date(2017, 10, 9));
//console.log(result);