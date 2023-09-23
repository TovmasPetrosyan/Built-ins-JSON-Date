function monthsInterval(dateStart, dateEnd) {
  result = [];
  startDate = new Date(dateStart);
  endDate = new Date(dateEnd);
  while (startDate <= endDate) {
    const monthName = startDate.toLocaleString('default', { month: 'long' });

    if (!result.includes(monthName)) {
      result.push(monthName);
    }

    startDate.setMonth(startDate.getMonth() + 1);
  }
  return result;


}

//let january = new Date(2017, 0, 1);
//let march = new Date(2017, 3, 1);
//console.log(monthsInterval(january, march));



//let december = new Date(2017, 11, 1);
//let january = new Date(2018, 0, 1);
//monthsInterval(december, january)



//let january2017 = new Date(2017, 0, 1);
//let january2018 = new Date(2018, 0, 1);
//monthsInterval(january2017, january2018)
